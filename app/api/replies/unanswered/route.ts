import { MicroCMSResponse, QA } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts } from '../../../models/microcms'
import { filterPostsHasOpenReply } from '@/lib'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const _ = req.url
  const limitCount = 100
  let offset = 0
  const allPostsHasReplies: QA[] = []
  while (true) {
    const res: MicroCMSResponse = await fetchPosts({
      queries: {
        filters: 'replies[exists]',
        fields: 'id,createdAt,question,answer,replies,replyTweetId',
        limit: limitCount,
        orders: 'createdAt',
        offset: offset ? Number(offset) : 0,
      },
    })
    allPostsHasReplies.push(...filterPostsHasOpenReply(res).contents)
    offset = offset + res.contents.length
    if (offset >= res.totalCount) {
      break
    }
  }

  return NextResponse.json({
    contents: allPostsHasReplies,
    totalCount: allPostsHasReplies.length,
    offset: 0,
    limit: limitCount,
  })
}
