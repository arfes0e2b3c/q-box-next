'use client'
import { noMoreResult, page, pageInner, title } from './page.css'
import { AnswerCardForAnswer } from '@/components/shared/AnswerCardForAnswer'
import InfiniteScroll from 'react-infinite-scroller'
import { LoadingCircle } from '@/components/shared/LoadingCircle'
import { useAnswerPageStore } from '@/store/answerPageStore'
import { useUnansweredPosts } from '@/app/client/useUnansweredPosts'

export default function Answer() {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch } =
    useUnansweredPosts()

  const setRefetch = useAnswerPageStore((state) => state.setRefetch)
  setRefetch(refetch)

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
