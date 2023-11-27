'use client'

import { PostForm } from '@/components/shared/PostBox'
import { formContainer, mainContainer, qAListTitle, topPage } from './page.css'
import { QAListWrapper } from '@/components/QAListWrapper'
import { useAnsweredPosts } from '@/hooks/useAnsweredPosts'

export default function Home() {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } = useAnsweredPosts()

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
