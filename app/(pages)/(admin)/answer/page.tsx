'use client'
import { limit, noMoreResult, page, pageInner, title, twitterApiRequestCount } from './page.css'
import { AnswerCardForAnswer } from '@/components/AnswerCardForAnswer'
import InfiniteScroll from 'react-infinite-scroller'
import { LoadingCircle } from '@/components/shared/LoadingCircle'
import { useAnswerPageStore } from '@/store/answerPageStore'
import { useUnansweredPosts } from '@/hooks/useUnansweredPosts'

export default function Answer() {
  const {
    posts: { postData, isLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch },
    twitterApiLogs: logData,
  } = useUnansweredPosts()

  const setRefetch = useAnswerPageStore((state) => state.setRefetch)
  setRefetch(refetch)

  const pagesData = postData?.pages ?? []

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (isError) {
    return <div>エラーが発生しました</div>
  }

  const isTwitterApiLimit = logData?.totalCount && logData?.totalCount >= 50

  return (
    <main className={page}>
      <h2 className={title}>未回答の質問：{pagesData[0].totalCount}件</h2>
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
