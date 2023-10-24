'use client'
import InfiniteScroll from 'react-infinite-scroller'
import { PostForm } from '@/components/shared/PostBox'
import { QACardContainer } from '@/components/shared/QACardContainer'

import {
  formContainer,
  mainContainer,
  qAListContainer,
  qAListItem,
  qAListTitle,
  topPage,
} from './page.css'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchSlicePosts } from './api/fetchSlicePosts'
import { qA } from '@/types'

export default function Home() {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ['labelQueryKey'],
      queryFn: ({ pageParam = 0 }) => fetchSlicePosts(pageParam),
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      getNextPageParam: (lastPage) =>
        lastPage?.offset < lastPage?.totalCount ? lastPage?.offset + 20 : false,
      useErrorBoundary: (error: { response: { status: number } }) => {
        return error.response?.status >= 500
      },
    })

  return (
    <main className={topPage}>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
      <div className={mainContainer}>
        <ul className={qAListContainer}>
          <h2 className={qAListTitle}>最新の質問</h2>

          <InfiniteScroll
            loadMore={(page) => {
              isFetching || fetchNextPage({ pageParam: page * 10 })
            }}
            hasMore={hasNextPage}
          >
            {data
              ? data?.pages.map((page) => {
                  return page.contents.map((qAData: qA) => (
                    <li className={qAListItem} key={qAData.id}>
                      <QACardContainer qAData={qAData} isLink />
                    </li>
                  ))
                })
              : []}
          </InfiniteScroll>
          {isFetching && <div className='loading'>Loading...</div>}
        </ul>
      </div>
    </main>
  )
}
