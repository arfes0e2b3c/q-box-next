import { splitTweet, addContinueText, addBaseText } from '@/lib/twitter'
import { useMutation } from '@tanstack/react-query'
import { patchTweetId } from './patchTweetId'
import { postTweetReplies } from './postTweetReplies'
import { postTweet } from './postTweet'
import { patchAnswer } from './patchAnswer'
import { AnswerState } from '@/types'
import { postS3Image } from './postS3Image'

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
      await postS3Image(contentId, question, state)
      const tweetId = await postTweetThread(answer, contentId)
      await patchTweetId(contentId, tweetId)
    }
  )

const postTweetThread = async (answer: string, contentId: string) => {
  let tweets = splitTweet(answer)
  tweets = addContinueText(tweets)
  tweets = addBaseText(tweets, contentId)

  try {
    const tweetReplyId: string = await postTweet(tweets[0])

    if (tweets.length > 1) {
      const replyId = await postTweetReplies(tweetReplyId, tweets.slice(1))
      return replyId
    } else {
      return tweetReplyId
    }
  } catch {
    throw new Error('ツイートに失敗しました')
  }
}
