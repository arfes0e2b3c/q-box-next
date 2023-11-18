import { useMutation } from '@tanstack/react-query'
import { addContinueText, splitReply } from '@/lib/twitter'
import { patchTweetId } from './patchTweetId'
import { postTweetReplies } from './postTweetReplies'
import { postReply } from './postReply'
import { patchReplyAnswer } from './patchReplyAnswer'

export const usePostReply = () =>
  useMutation(
    async ({
      postId,
      contentId,
      replySentence,
      replyTweetId,
    }: {
      postId: string
      contentId: string
      replySentence: string
      replyTweetId: string
    }) => {
      await patchReplyAnswer(contentId)
      const tweetId = await postReplyThread(replyTweetId, replySentence)
      await patchTweetId(postId, tweetId)
    }
  )

export const postReplyThread = async (
  replyTweetId: string,
  replySentence: string
): Promise<string> => {
  let replies = splitReply(replySentence)
  replies = addContinueText(replies)
  try {
    let replyId: string = await postReply(replies[0], replyTweetId)

    if (replies.length > 1) {
      replyId = await postTweetReplies(replyId, replies.slice(1))
    }
    return replyId
  } catch {
    throw new Error('公開に失敗しました')
  }
}
