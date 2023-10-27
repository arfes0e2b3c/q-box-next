import { MicroCMSResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts } from '../microcms'
import { filterPublicReplies } from '@/lib'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const { searchParams } = new URL(req.url)
  const offset = searchParams.get('offset')

  const limitCount = 20
  const res: MicroCMSResponse = await fetchPosts({
    queries: {
      filters: 'answer[exists]',
      limit: limitCount,
      offset: offset ? Number(offset) : 0,
    },
  })

  res.contents = res.contents.map((post) => filterPublicReplies(post))

  return NextResponse.json(res)
}
