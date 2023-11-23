import { useMutation } from '@tanstack/react-query'
import { deleteReply } from './deleteReply'

export const useDeleteReply = () =>
  useMutation(async (contentId: string) => await deleteReply(contentId))
