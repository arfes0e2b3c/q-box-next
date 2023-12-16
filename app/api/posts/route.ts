import { MicroCMSResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import { createPost, deletePost, fetchPosts } from '../../models/microcms'
import { filterPublicReplies } from '@/lib'
import { sliceLimitCount } from '@/consts'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const { searchParams } = new URL(req.url)
  const offset = searchParams.get('offset')

  const res: MicroCMSResponse = await fetchPosts({
    queries: {
      filters: 'answer[exists]',
      fields: 'id,createdAt,question,answer,state,replies',
      limit: sliceLimitCount,
      offset: offset ? Number(offset) : 0,
      orders: '-updatedAt',
    },
  })

  res.contents = res.contents.map((post) => filterPublicReplies(post))

  return NextResponse.json(res)
}

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.question === '')
    return NextResponse.json({ error: '質問を入力してください' }, { status: 400 })
  const res = await createPost(props.question)
  return NextResponse.json(res, { status: 200 })
}

export async function DELETE(req: NextRequest): Promise<NextResponse<{ status: number }>> {
  const props = await req.json()
  await deletePost(props.contentId)
  return NextResponse.json({ status: 200 })
}
