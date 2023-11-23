'use client'
import { page, pageInner, title } from './page.css'
// import { Metadata } from 'next'
import { AnswerCardForReply } from '@/components/shared/AnswerCardForReply'
import { LoadingCircle } from '@/components/shared/LoadingCircle'
import InfiniteScroll from 'react-infinite-scroller'
import { noMoreResult } from '../page.css'
import { useReplyPageStore } from '@/store/replyPageStore'
import { useUnansweredReplies } from '@/app/client/useUnasnweredReplies'

// export const metadata: Metadata = {
//   title: '管理者ページ',
//   description: 'お手伝いサークルの管理者用ページです。',
// }

export default function Answer() {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch } =
    useUnansweredReplies()

  const setRefetch = useReplyPageStore((state) => state.setRefetch)
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
      <h2 className={title}>未回答の情報提供：{pagesData[0].totalCount}件</h2>
      <InfiniteScroll
        loadMore={(page) => {
          isFetching || fetchNextPage({ pageParam: page * 10 })
        }}
        hasMore={hasNextPage}
      >
        <ul className={pageInner}>
          {pagesData && pagesData[0].contents.length ? (
            pagesData.map((page) =>
              page.contents.map((post) => <AnswerCardForReply key={post.id} post={post} />)
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
