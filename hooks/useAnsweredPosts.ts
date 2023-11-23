import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSlicePosts } from '../app/client/fetchSlicePosts'

export const useAnsweredPosts = () =>
  useInfiniteQuery({
    queryKey: ['newPosts'],
    queryFn: ({ pageParam = 0 }) => fetchSlicePosts(pageParam),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    getNextPageParam: (lastPage) =>
      lastPage?.offset < lastPage?.totalCount ? lastPage?.offset + 20 : false,
    useErrorBoundary: (error: { response: { status: number } }) => {
      return error.response?.status >= 500
    },
  })
