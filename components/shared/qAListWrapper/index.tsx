'use client'

import { MicroCMSResponse, QA } from '@/types'
import InfiniteScroll from 'react-infinite-scroller'
import { QACardContainer } from '../QACardContainer'
import { SuspenseCardContainer } from '../SuspenseCardContainer'
import { loadingCircleContainer, qAListContainer, qAListItem } from './index.css'
import { Oval } from 'react-loader-spinner'

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
          {isFetching && (
            <div className={loadingCircleContainer}>
              <Oval
                strokeWidth={5}
                width={60}
                height={60}
                color='#888'
                secondaryColor='#ddd'
                ariaLabel='loading'
              />
            </div>
          )}
        </>
      )}
    </>
  )
}
