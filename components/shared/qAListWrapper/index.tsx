'use client'

import { MicroCMSResponse, QA } from '@/types'
import InfiniteScroll from 'react-infinite-scroller'
import { QACardContainer } from '../QACardContainer'
import { SuspenseCardContainer } from '../SuspenseCardContainer'
import { qAListContainer, qAListItem } from './index.css'

export const QAListWrapper = ({
  pagesData,
  isLoading,
  isFetching,
  fetchNextPage,
  hasNextPage,
}: {
  pagesData: MicroCMSResponse[]
  isLoading: boolean
  isFetching: boolean
  fetchNextPage: (options: { pageParam: number }) => void
  hasNextPage: boolean
}) => {
  return (
    <>
      {isLoading ? (
        <ul className={qAListContainer}>
          {[...Array(3)].map((_, i) => (
            <li className={qAListItem} key={i}>
              <SuspenseCardContainer />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <InfiniteScroll
            loadMore={(page) => {
              isFetching || fetchNextPage({ pageParam: page * 10 })
            }}
            hasMore={hasNextPage}
          >
            <ul className={qAListContainer}>
              {pagesData
                ? pagesData.map((page) => {
                    return page.contents.map((qAData: QA) => (
                      <li className={qAListItem} key={qAData.id}>
                        <QACardContainer qAData={qAData} isLink />
                      </li>
                    ))
                  })
                : []}
            </ul>
          </InfiniteScroll>
          {isFetching && <p>Loading...</p>}
        </>
      )}
    </>
  )
}
