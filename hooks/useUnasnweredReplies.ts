import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { fetchSliceUnansweredReplies } from '../app/client/microcms/reply/fetchSliceUnansweredReplies'
import { fetchTwitterApiLogs } from '@/app/client/microcms/twitterApiRequest/fetchTwitterApiLog'

export const useUnansweredReplies = () => {
  const {
    data: replyData,
    isLoading: replyIsLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
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
  const { data: logData, isLoading: logIsLoading } = useQuery(
    ['twitterApiLogs'],
    async () => await fetchTwitterApiLogs(),
    {
      refetchOnWindowFocus: false,
    }
  )
  return {
    posts: { replyData, replyIsLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch },
    twitterApiLogs: { logData, logIsLoading },
  }
}
