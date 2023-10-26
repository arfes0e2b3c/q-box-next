'use client'

import { PostForm } from '@/components/shared/PostBox'
import { formContainer, mainContainer, qAListTitle, topPage } from './page.css'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QAListWrapper } from '@/components/shared/qAListWrapper'
import { useSearchParams } from 'next/navigation'
import { fetchSliceSearchPosts } from '../api/fetchSliceSearchPosts'

export default function Search() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
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

  const pagesData = data?.pages ?? []

  return (
    <main className={topPage}>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
      <div className={mainContainer}>
        <h2 className={qAListTitle}>「{q}」の検索結果</h2>
        <QAListWrapper
          pagesData={pagesData}
          isLoading={isLoading}
          isFetching={isFetching}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage ?? false}
        />
      </div>
    </main>
  )
}
