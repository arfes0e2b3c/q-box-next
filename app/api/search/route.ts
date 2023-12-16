import { MicroCMSResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts } from '../../models/microcms'
import { filterPublicReplies } from '@/lib'
import { sliceLimitCount } from '@/consts'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const { searchParams } = new URL(req.url)
  const offset = searchParams.get('offset')
  const q = searchParams.get('q') || ''

  const res: MicroCMSResponse = await fetchPosts({
    queries: {
      filters: 'answer[exists]',
      fields: 'id,createdAt,question,answer,state,replies',
      limit: sliceLimitCount,
      offset: offset ? Number(offset) : 0,
      q: q,
    },
  })

  res.contents = res.contents.map((post) => filterPublicReplies(post))

  return NextResponse.json(res)
}
