import { createTwitterApiLog, fetchPosts, fetchTwitterApiLogs } from '@/app/models/microcms'
import { MicroCMSResponse } from '@/types'
import dayjs from 'dayjs'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<NextResponse<MicroCMSResponse>> {
  const now = dayjs()
  const aDayAgo = now.subtract(1, 'day')
  const formatADayAgo = aDayAgo.format('YYYY-MM-DDTHH:mm:ss')

  const limitCount = 0
  const res: MicroCMSResponse = await fetchTwitterApiLogs({
    filters: 'createdAt[greater_than]' + formatADayAgo,
    limit: limitCount,
  })

  return NextResponse.json(res)
}

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.question === '')
    return NextResponse.json({ error: '質問を入力してください' }, { status: 400 })
  const res = await createTwitterApiLog(props.type, props.twitterId)
  return NextResponse.json(res, { status: 200 })
}
