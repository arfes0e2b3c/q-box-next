import { QA } from '@/types'
import { fetchPost } from '../../microcms'
import { filterPublicReplies } from '@/lib'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { contentId: string } }
): Promise<NextResponse<QA | { error: string }>> {
  try {
    const res = await fetchPost({
      contentId: params.contentId,
      queries: { filters: 'answer[exists]', fields: 'id,createdAt,question,answer,state,replies' },
    })
    const filteredData = filterPublicReplies(res)
    return NextResponse.json(filteredData)
  } catch (e) {
    return NextResponse.json({ error: '質問の取得に失敗しました' }, { status: 400 })
  }
}
