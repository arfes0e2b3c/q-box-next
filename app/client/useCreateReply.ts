import { useMutation } from '@tanstack/react-query'
import { createReply } from './createReply'
import { patchReplyId } from './patchReplyId'

export const useCreateReply = () =>
  useMutation(async ({ reply, replyFor }: { reply: string; replyFor: string }) => {
    await createReply(reply, replyFor)
    const patchReplyIdRes = await patchReplyId(replyFor)
    return patchReplyIdRes
  })
