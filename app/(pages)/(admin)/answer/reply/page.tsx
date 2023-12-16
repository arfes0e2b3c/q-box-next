'use client'
import { limit, noMoreResult, page, pageInner, title, twitterApiRequestCount } from './page.css'
// import { Metadata } from 'next'
import { AnswerCardForReply } from '@/components/AnswerCardForReply'
import { LoadingCircle } from '@/components/shared/LoadingCircle'
import InfiniteScroll from 'react-infinite-scroller'

import { useReplyPageStore } from '@/store/replyPageStore'
import { useUnansweredReplies } from '@/hooks/useUnasnweredReplies'

// export const metadata: Metadata = {
//   title: '管理者ページ',
//   description: 'お手伝いサークルの管理者用ページです。',
// }

export default function Answer() {
  const {
    posts: { replyData, replyIsLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch },
    twitterApiLogs: { logData, logIsLoading },
  } = useUnansweredReplies()

  const setRefetch = useReplyPageStore((state) => state.setRefetch)
  setRefetch(refetch)

  const pagesData = replyData?.pages ?? []

  const isLoading = replyIsLoading || logIsLoading

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (isError) {
    return <div>エラーが発生しました</div>
  }

  const isTwitterApiLimit = logData?.totalCount && logData?.totalCount >= 50

  return (
    <main className={page}>
      <h2 className={title}>未回答の情報提供：{pagesData[0].totalCount}件</h2>
      <h3 className={[twitterApiRequestCount, isTwitterApiLimit ? limit : ''].join(' ')}>
        今日のTwitterAPI使用数：{logData?.totalCount}
        {isTwitterApiLimit ? '（上限に達しました）' : ''}
      </h3>
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
      {!hasNextPage && <p className={noMoreResult}>最後の質問です</p>}
    </main>
  )
}
