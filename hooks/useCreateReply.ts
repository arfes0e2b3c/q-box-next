import { useMutation } from '@tanstack/react-query'
import { createReply } from '../app/client/microcms/reply/createReply'
import { patchReplyId } from '../app/client/microcms/post/patchReplyId'

export const useCreateReply = () =>
  useMutation(async ({ reply, replyFor }: { reply: string; replyFor: string }) => {
    await createReply(reply, replyFor)
    const patchReplyIdRes = await patchReplyId(replyFor)
    return patchReplyIdRes
  })
