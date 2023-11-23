import { useMutation } from '@tanstack/react-query'
import { createReply } from '../app/client/createReply'
import { patchReplyId } from '../app/client/patchReplyId'

export const useCreateReply = () =>
  useMutation(async ({ reply, replyFor }: { reply: string; replyFor: string }) => {
    await createReply(reply, replyFor)
    const patchReplyIdRes = await patchReplyId(replyFor)
    return patchReplyIdRes
  })
