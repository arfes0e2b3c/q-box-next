import { useMutation } from '@tanstack/react-query'
import { addContinueText, splitReply } from '@/lib/twitter'
import { patchTweetId } from './patchTweetId'
import { createTweetReplies } from './createTweetReplies'
import { createReply } from './createReply'
import { patchReplyAnswer } from './patchReplyAnswer'
import { createS3Image } from './createS3Image'

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
      await createS3Image(contentId, replySentence, 'answered')
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
    let replyId: string = await createReply(replies[0], replyTweetId)

    if (replies.length > 1) {
      replyId = await createTweetReplies(replyId, replies.slice(1))
    }
    return replyId
  } catch {
    throw new Error('公開に失敗しました')
  }
}
