import { useMutation } from '@tanstack/react-query'
import { addContinueText, splitReply } from '@/lib/twitter'
import { patchTweetId } from '../app/client/microcms/post/patchTweetId'
import { createTweetReplies } from '../app/client/twitter/createTweetReplies'
import { patchReplyAnswer } from '../app/client/microcms/reply/patchReplyAnswer'
import { createS3Image } from '../app/client/s3/createS3Image'
import { createReply } from '../app/client/twitter/createReply'
import { createTwitterApiLog } from '@/app/client/microcms/twitterApiRequest/createTwitterApiLog'

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
    await createTwitterApiLog('reply', replyId)

    if (replies.length > 1) {
      replyId = await createTweetReplies(replyId, replies.slice(1))
      await createTwitterApiLog('reply', replyId)
    }
    return replyId
  } catch {
    throw new Error('公開に失敗しました')
  }
}
