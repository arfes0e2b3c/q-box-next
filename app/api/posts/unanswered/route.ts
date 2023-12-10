import { MicroCMSResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts } from '../../../models/microcms'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const { searchParams } = new URL(req.url)
  const offset = searchParams.get('offset')

  const limitCount = 10
  const res: MicroCMSResponse = await fetchPosts({
    queries: {
      filters: 'answer[not_exists]',
      fields: 'id,createdAt,question',
      limit: limitCount,
      orders: 'createdAt',
      offset: offset ? Number(offset) : 0,
    },
  })
  return NextResponse.json(res)
}
