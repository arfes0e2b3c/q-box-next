import { NextRequest, NextResponse } from 'next/server'
import { patchPost } from '../../../../models/microcms'

export async function PATCH(req: NextRequest, { params }: { params: { contentId: string } }) {
  const props = await req.json()
  if (props.question === '')
    return NextResponse.json({ error: 'ツイートのIDが存在しません' }, { status: 400 })
  const res = await patchPost(params.contentId, { replyTweetId: props.tweetId })
  return NextResponse.json(res, { status: 200 })
}
