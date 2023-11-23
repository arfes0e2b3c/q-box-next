import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextRequest, NextResponse } from 'next/server'
import { auth, isRightAccessUser } from '../firebase'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.email === '')
    return NextResponse.json({ error: 'メールアドレスを入力してください' }, { status: 400 })
  if (props.password === '')
    return NextResponse.json({ error: 'パスワードを入力してください' }, { status: 400 })
  const res = await signInWithEmailAndPassword(auth, props.email, props.password)
  return NextResponse.json(res, { status: 200 })
}

export async function GET(req: NextRequest): Promise<NextResponse<boolean>> {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const uid = searchParams.get('uid')
  if (!email || !uid) return NextResponse.json(false, { status: 400 })
  if (!isRightAccessUser(email, uid)) return NextResponse.json(false, { status: 400 })
  else return NextResponse.json(true, { status: 200 })
}
