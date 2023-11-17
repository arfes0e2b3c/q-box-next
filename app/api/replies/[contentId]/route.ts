import { NextRequest, NextResponse } from 'next/server'
import { fetchReplies } from '../../microcms'

export async function GET(req: NextRequest, { params }: { params: { contentId: string } }) {
  const res = await fetchReplies({
    filters: `replyFor[equals]${params.contentId}[and]isDeleted[not_equals]true[and]replyAnswer[not_exists]`,
    fields: 'id',
    limit: 100,
  })
  return NextResponse.json(res, { status: 200 })
}
