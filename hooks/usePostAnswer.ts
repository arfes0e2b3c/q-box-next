import { splitTweet, addContinueText, addBaseText } from '@/lib/twitter'
import { useMutation } from '@tanstack/react-query'
import { patchTweetId } from '../app/client/microcms/post/patchTweetId'
import { createTweetReplies } from '../app/client/twitter/createTweetReplies'
import { createTweet } from '../app/client/twitter/createTweet'
import { patchAnswer } from '../app/client/microcms/post/patchAnswer'
import { AnswerState } from '@/types'
import { createS3Image } from '../app/client/s3/createS3Image'
import { createTwitterApiLog } from '@/app/client/microcms/twitterApiRequest/createTwitterApiLog'

export const usePostAnswer = () =>
  useMutation(
    async ({
      answer,
      contentId,
      state,
      question,
    }: {
      answer: string
      contentId: string
      state: AnswerState
      question: string
    }) => {
      const patchAnswerRes = await patchAnswer(answer, contentId, state)
      if (patchAnswerRes.error) throw new Error(patchAnswerRes.error)
      await createS3Image(contentId, question, state)
      const tweetId = await postTweetThread(answer, contentId)
      await patchTweetId(contentId, tweetId)
    }
  )

const postTweetThread = async (answer: string, contentId: string) => {
  let tweets = splitTweet(answer)
  tweets = addContinueText(tweets)
  tweets = addBaseText(tweets, contentId)

  try {
    const tweetReplyId: string = await createTweet(tweets[0])
    await createTwitterApiLog('tweet', tweetReplyId)

    if (tweets.length > 1) {
      const replyId = await createTweetReplies(tweetReplyId, tweets.slice(1))
      return replyId
    } else {
      return tweetReplyId
    }
  } catch {
    throw new Error('ツイートに失敗しました')
  }
}
