'use client'
import { limit, noMoreResult, page, pageInner, title, twitterApiRequestCount } from './page.css'
import { AnswerCardForAnswer } from '@/components/AnswerCardForAnswer'
import InfiniteScroll from 'react-infinite-scroller'
import { LoadingCircle } from '@/components/shared/LoadingCircle'
import { useAnswerPageStore } from '@/store/answerPageStore'
import { useUnansweredPosts } from '@/hooks/useUnansweredPosts'

export default function Answer() {
  const {
    posts: { postData, postIsLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch },
    twitterApiLogs: { logData, logIsLoading },
  } = useUnansweredPosts()

  const setRefetch = useAnswerPageStore((state) => state.setRefetch)
  setRefetch(refetch)

  const pagesData = postData?.pages ?? []

  const isLoading = postIsLoading || logIsLoading

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (isError) {
    return <div>エラーが発生しました</div>
  }

  const apiLimit = 16
  const isTwitterApiLimit = (logData?.totalCount && logData?.totalCount >= apiLimit) || false

  return (
    <main className={page}>
      <h2 className={title}>未回答の質問：{pagesData[0].totalCount}件</h2>
      <h3 className={[twitterApiRequestCount, isTwitterApiLimit ? limit : ''].join(' ')}>
        今日のTwitterAPI使用数：{logData?.totalCount}
        {isTwitterApiLimit ? '（上限に達しました）' : ''}
      </h3>
      <InfiniteScroll
        loadMore={() => {
          isFetching || fetchNextPage()
        }}
        hasMore={hasNextPage}
      >
        <ul className={pageInner}>
          {pagesData && pagesData[0].contents.length ? (
            pagesData.map((page) =>
              page.contents.map((post) => (
                <AnswerCardForAnswer
                  key={post.id}
                  post={post}
                  refetch={refetch}
                  isTwitterApiLimit={isTwitterApiLimit ?? false}
                />
              ))
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
