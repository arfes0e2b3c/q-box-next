import { useQuery } from '@tanstack/react-query'
import { fetchAllUnansweredReplies } from '../app/client/microcms/reply/fetchAllUnansweredReplies'
import { fetchTwitterApiLogs } from '@/app/client/microcms/twitterApiRequest/fetchTwitterApiLog'

export const useUnansweredReplies = () => {
  const {
    data: replyData,
    isLoading: replyIsLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['unansweredReplies'],
    queryFn: fetchAllUnansweredReplies,
    refetchOnWindowFocus: false,
    staleTime: 60000,
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
    posts: { replyData, replyIsLoading, isError, isFetching, refetch },
    twitterApiLogs: { logData, logIsLoading },
  }
}
