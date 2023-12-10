import { NextRequest, NextResponse } from 'next/server'
import { createReply } from '../../models/microcms'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.reply === '')
    return NextResponse.json({ error: '情報提供を入力してください' }, { status: 400 })
  const res = await createReply(props.reply, props.replyFor)
  return NextResponse.json(res, { status: 200 })
}
