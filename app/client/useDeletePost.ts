import { useMutation } from '@tanstack/react-query'
import { deletePost } from './deletePost'

export const useDeletePost = () =>
  useMutation(async (contentId: string) => await deletePost(contentId))
