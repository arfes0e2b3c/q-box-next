import { NextRequest, NextResponse } from 'next/server'
import { postReply } from '../../../models/twitter'
import { twitterMaxLength } from '@/consts'
import { countTweetLength } from '@/lib'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.text === '')
    return NextResponse.json({ error: 'リプライ内容がありません' }, { status: 400 })
  if (countTweetLength(props.text) > twitterMaxLength)
    return NextResponse.json({ error: '文字数が超過しています' }, { status: 400 })
  let currentReplyId = props.firstReplyId
  for (const reply of props.replies) {
    currentReplyId = await postReply(reply, currentReplyId)
  }

  return NextResponse.json({ id: currentReplyId }, { status: 200 })
}
