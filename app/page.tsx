'use client'

import { PostForm } from '@/components/shared/PostBox'
import { formContainer, mainContainer, qAListTitle, topPage } from './page.css'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSlicePosts } from './api/fetchSlicePosts'
import { QAListWrapper } from '@/components/shared/qAListWrapper'

export default function Home() {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
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

  const pagesData = data?.pages ?? []

  if (isError) {
    return <div>エラーが発生しました</div>
  }

  return (
    <main className={topPage}>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
      <div className={mainContainer}>
        <h2 className={qAListTitle}>最新の質問</h2>
        {isError ? (
          <div>エラーが発生しました</div>
        ) : (
          <QAListWrapper
            pagesData={pagesData}
            isLoading={isLoading}
            isFetching={isFetching}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage ?? false}
          />
        )}
      </div>
    </main>
  )
}
