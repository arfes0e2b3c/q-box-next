import { NextRequest, NextResponse } from 'next/server'
import { tweet } from '../twitter'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.text === '')
    return NextResponse.json({ error: 'ツイート内容がありません' }, { status: 400 })
  const res = await tweet(props.text)
  return NextResponse.json(res.data.id, { status: 200 })
}
