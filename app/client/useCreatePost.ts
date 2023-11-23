import { useMutation } from '@tanstack/react-query'
import { createPost } from './createPost'

export const useCreatePost = () => useMutation((question: string) => createPost(question))
