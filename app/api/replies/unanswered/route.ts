import { MicroCMSResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts } from '../../microcms'
import { filterPostsHasOpenReply } from '@/lib'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const { searchParams } = new URL(req.url)
  const offset = searchParams.get('offset')

  const limitCount = 100
  const res: MicroCMSResponse = await fetchPosts({
    queries: {
      filters: 'replies[exists]',
      fields: 'id,createdAt,question,answer,replies,replyTweetId',
      limit: limitCount,
      orders: 'createdAt',
      offset: offset ? Number(offset) : 0,
    },
  })

  return NextResponse.json(filterPostsHasOpenReply(res))
}
