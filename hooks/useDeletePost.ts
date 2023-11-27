import { useMutation } from '@tanstack/react-query'
import { deletePost } from '../app/client/microcms/post/deletePost'

export const useDeletePost = () =>
  useMutation(async (contentId: string) => await deletePost(contentId))
