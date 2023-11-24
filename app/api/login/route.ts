import { NextRequest, NextResponse } from 'next/server'
import { isRightAccessUser, loginFirebase } from '../firebase'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { email, password } = await req.json()
  if (!email)
    return NextResponse.json({ error: 'メールアドレスを入力してください' }, { status: 400 })
  if (!password)
    return NextResponse.json({ error: 'パスワードを入力してください' }, { status: 400 })
  const res = await loginFirebase(email, password)
  return NextResponse.json(res, { status: 200 })
}

export async function GET(req: NextRequest): Promise<NextResponse<boolean>> {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const uid = searchParams.get('uid')
  if (!email || !uid) return NextResponse.json(false, { status: 400 })
  return isRightAccessUser(email, uid)
    ? NextResponse.json(true, { status: 200 })
    : NextResponse.json(false, { status: 400 })
}
