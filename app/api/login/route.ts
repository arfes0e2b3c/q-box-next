import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const props = await req.json()
  if (props.email === '')
    return NextResponse.json({ error: 'メールアドレスを入力してください' }, { status: 400 })
  if (props.password === '')
    return NextResponse.json({ error: 'パスワードを入力してください' }, { status: 400 })
  const res = await signInWithEmailAndPassword(auth, props.email, props.password)
  return NextResponse.json(res, { status: 200 })
}
