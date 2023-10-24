import { MicroCMSResponse, qA } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts } from '../microcms'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const { searchParams } = new URL(req.url)
  const offset = searchParams.get('offset')

  const limitCount = 20

  const res: MicroCMSResponse = await fetchPosts({
    queries: {
      filters: 'answer[exists][and]replyTweetId[exists]',
      limit: limitCount,
      offset: offset ? Number(offset) : 0,
    },
  })

  return NextResponse.json(res)
}
