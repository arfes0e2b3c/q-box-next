'use client'

import { qA } from '@/types'
import InfiniteScroll from 'react-infinite-scroller'
import { QACardContainer } from '../QACardContainer'
import { SuspenseCardContainer } from '../SuspenseCardContainer'
import { fetchSlicePosts } from '@/app/api/fetchSlicePosts'
import { useInfiniteQuery } from '@tanstack/react-query'
import { qAListTitle, qAListContainer, qAListItem, mainContainer } from './index.css'

export const QAListWrapper = ({ queryKey, title }: { queryKey: string; title: string }) => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: [queryKey],
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
    <div className={mainContainer}>
      <h2 className={qAListTitle}>{title}</h2>
      {isLoading ? (
        <ul className={qAListContainer}>
          {[...Array(3)].map((_, i) => (
            <li className={qAListItem} key={i}>
              <SuspenseCardContainer />
            </li>
          ))}
        </ul>
      ) : (
        <InfiniteScroll
          loadMore={(page) => {
            isFetching || fetchNextPage({ pageParam: page * 10 })
          }}
          hasMore={hasNextPage}
        >
          <ul className={qAListContainer}>
            {data
              ? data?.pages.map((page) => {
                  return page.contents.map((qAData: qA) => (
                    <li className={qAListItem} key={qAData.id}>
                      <QACardContainer qAData={qAData} isLink />
                    </li>
                  ))
                })
              : []}
          </ul>
        </InfiniteScroll>
      )}
      {isFetching && <p>Loading...</p>}
    </div>
  )
}
