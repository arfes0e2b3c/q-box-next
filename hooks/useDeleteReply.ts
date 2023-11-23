import { useMutation } from '@tanstack/react-query'
import { deleteReply } from '../app/client/microcms/reply/deleteReply'

export const useDeleteReply = () =>
  useMutation(async (contentId: string) => await deleteReply(contentId))
