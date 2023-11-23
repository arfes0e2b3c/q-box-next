import { useMutation } from '@tanstack/react-query'
import { createPost } from '../app/client/createPost'

export const useCreatePost = () => useMutation((question: string) => createPost(question))
