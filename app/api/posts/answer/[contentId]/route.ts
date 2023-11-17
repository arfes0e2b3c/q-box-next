import { NextRequest, NextResponse } from 'next/server'
import { patchPost } from '../../../microcms'

export async function PATCH(req: NextRequest, { params }: { params: { contentId: string } }) {
  const props = await req.json()
  if (props.question === '')
    return NextResponse.json({ error: '回答を入力してください' }, { status: 400 })
  const res = await patchPost(params.contentId, { answer: props.answer })
  return NextResponse.json(res, { status: 200 })
}
