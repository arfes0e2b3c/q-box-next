import { splitTweet, addContinueText, addBaseText } from '@/lib/twitter'
import { useMutation } from '@tanstack/react-query'
import { patchTweetId } from './patchTweetId'
import { postTweetReplies } from './postTweetReplies'
import { postTweet } from './postTweet'
import { patchAnswer } from './patchAnswer'
import { AnswerState } from '@/types'

export const usePostAnswer = () =>
  useMutation(
    async ({
      answer,
      contentId,
      state,
    }: {
      answer: string
      contentId: string
      state: AnswerState
    }) => {
      const patchAnswerRes = await patchAnswer(answer, contentId, state)
      if (patchAnswerRes.error) throw new Error(patchAnswerRes.error)
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
