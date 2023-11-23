import { useMutation } from '@tanstack/react-query'
import { deleteReply } from '../app/client/deleteReply'
import { createPost } from '../app/client/createPost'

export const useMoveToAnswer = () =>
  useMutation(async ({ contentId, question }: { contentId: string; question: string }) => {
    try {
      await createPost(question)
      await deleteReply(contentId)
    } catch (e) {
      throw new Error(`移動に失敗しました ${e}`)
    }
  })
