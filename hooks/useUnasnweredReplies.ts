import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSliceUnansweredReplies } from '../app/client/microcms/reply/fetchSliceUnansweredReplies'

export const useUnansweredReplies = () =>
  useInfiniteQuery({
    queryKey: ['unanswered'],
    queryFn: ({ pageParam = 0 }) => fetchSliceUnansweredReplies(pageParam),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    getNextPageParam: (lastPage) =>
      lastPage?.offset < lastPage?.totalCount ? lastPage?.offset + 20 : false,
    useErrorBoundary: (error: { response: { status: number } }) => {
      return error.response?.status >= 500
    },
  })
