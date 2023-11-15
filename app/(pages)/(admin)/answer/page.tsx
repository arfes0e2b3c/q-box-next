'use client'
import { noMoreResult, page, pageInner, title } from './page.css'
import { AnswerCardForAnswer } from '@/components/shared/AnswerCardForAnswer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSliceUnansweredPosts } from '@/app/client/fetchSliceUnansweredPosts'
import { fetchSlicePosts } from '@/app/client/fetchSlicePosts'
import InfiniteScroll from 'react-infinite-scroller'
import { LoadingCircle } from '@/components/shared/LoadingCircle'

export default function Answer() {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch } =
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

  const pagesData = data?.pages ?? []

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (isError) {
    return <div>エラーが発生しました</div>
  }

  return (
    <main className={page}>
      <h2 className={title}>未回答の質問：{pagesData[0].totalCount}件</h2>
      <InfiniteScroll
        loadMore={(page) => {
          isFetching || fetchNextPage({ pageParam: page * 10 })
        }}
        hasMore={hasNextPage}
      >
        <ul className={pageInner}>
          {pagesData && pagesData[0].contents.length ? (
            pagesData.map((page) =>
              page.contents.map((post) => (
                <AnswerCardForAnswer key={post.id} post={post} refetch={refetch} />
              ))
            )
          ) : (
            <p>質問はありません</p>
          )}
        </ul>
      </InfiniteScroll>
      {isFetching && <LoadingCircle />}
      {!hasNextPage && <p className={noMoreResult}>検索結果は以上です</p>}
    </main>
  )
}
