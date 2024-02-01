import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { fetchSliceUnansweredPosts } from '../app/client/microcms/post/fetchSliceUnansweredPosts'
import { fetchTwitterApiLogs } from '@/app/client/microcms/twitterApiRequest/fetchTwitterApiLog'

export const useUnansweredPosts = () => {
  const {
    data: postData,
    isLoading: postIsLoading,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['unansweredPosts'],
    queryFn: ({ pageParam = 0 }) => fetchSliceUnansweredPosts(pageParam),
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
    posts: { postData, postIsLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch },
    twitterApiLogs: { logData, logIsLoading },
  }
}
