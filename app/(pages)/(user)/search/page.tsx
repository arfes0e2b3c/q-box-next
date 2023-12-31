'use client'

import { PostForm } from '@/components/shared/PostBox'
import { formContainer, mainContainer, noResult, qAListTitle, topPage } from './page.css'
import { QAListWrapper } from '@/components/QAListWrapper'
import { useSearchParams } from 'next/navigation'
import { QACardContainer } from '@/components/QACardContainer'
import { noResultQAData } from '@/consts'
import { useSearchPosts } from '@/hooks/useSearchPosts'

export default function Search() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } = useSearchPosts(q)

  const pagesData = data?.pages ?? []

  return (
    <main className={topPage}>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
      <div className={mainContainer}>
        <h2 className={qAListTitle}>
          「{q}」の検索結果：{pagesData[0]?.totalCount >= 0 ? pagesData[0]?.totalCount : '　'}件
        </h2>
        {isError && <div>エラーが発生しました</div>}
        {isError || isLoading || pagesData[0]?.totalCount ? (
          <QAListWrapper
            pagesData={pagesData}
            isLoading={isLoading}
            isFetching={isFetching}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage ?? false}
          />
        ) : (
          <div className={noResult}>
            <QACardContainer qAData={noResultQAData} />
          </div>
        )}
      </div>
    </main>
  )
}
