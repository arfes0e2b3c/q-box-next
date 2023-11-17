import { NextRequest, NextResponse } from 'next/server'
import { postTweet } from '../twitter'
import { countTweetLength } from '@/lib'
import { twitterMaxLength } from '@/consts'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.text === '')
    return NextResponse.json({ error: 'ツイート内容がありません' }, { status: 400 })
  if (countTweetLength(props.text) > twitterMaxLength)
    return NextResponse.json({ error: '文字数が超過しています' }, { status: 400 })
  const tweetReplyId = await postTweet(props.text)
  return NextResponse.json(tweetReplyId, { status: 200 })
}
