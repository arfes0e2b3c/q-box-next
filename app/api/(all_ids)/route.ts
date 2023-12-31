import { MicroCMSResponse, QA } from '@/types'
import { NextResponse } from 'next/server'
import { fetchPosts } from '../../models/microcms'

export async function GET(): Promise<NextResponse<{ data: QA[] }>> {
  let currentOffset = 0
  let totalPosts = 101
  let contentsArray: QA[] = []

  while (currentOffset < totalPosts) {
    const res: MicroCMSResponse = await fetchPosts({
      queries: {
        filters: 'answer[exists][and]replyTweetId[exists]',
        limit: 100,
        fields: 'id',
        offset: currentOffset,
      },
    })

    contentsArray = contentsArray.concat(res.contents)

    currentOffset += res.contents.length
    totalPosts !== res.totalCount && (totalPosts = res.totalCount)
  }

  return NextResponse.json({
    data: contentsArray,
  })
}
