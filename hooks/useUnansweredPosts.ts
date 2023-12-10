import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSliceUnansweredPosts } from '../app/client/microcms/post/fetchSliceUnansweredPosts'

export const useUnansweredPosts = () =>
  useInfiniteQuery({
    queryKey: ['unanswered'],
    queryFn: ({ pageParam = 0 }) => fetchSliceUnansweredPosts(pageParam),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    getNextPageParam: (lastPage) =>
      lastPage?.offset < lastPage?.totalCount ? lastPage?.offset + 20 : false,
    useErrorBoundary: (error: { response: { status: number } }) => {
      return error.response?.status >= 500
    },
  })
