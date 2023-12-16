import { createTwitterApiLog } from '@/app/models/microcms'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.question === '')
    return NextResponse.json({ error: '質問を入力してください' }, { status: 400 })
  const res = await createTwitterApiLog(props.type, props.twitterId)
  return NextResponse.json(res, { status: 200 })
}
