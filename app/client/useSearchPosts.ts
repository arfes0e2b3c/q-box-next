import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSliceSearchPosts } from './fetchSliceSearchPosts'

export const useSearchPosts = (q: string) =>
  useInfiniteQuery({
    queryKey: ['searchPosts', q],
    queryFn: ({ pageParam = 0 }) => fetchSliceSearchPosts(pageParam, q),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    getNextPageParam: (lastPage) =>
      lastPage?.offset < lastPage?.totalCount ? lastPage?.offset + 20 : false,
    useErrorBoundary: (error: { response: { status: number } }) => {
      return error.response?.status >= 500
    },
  })
