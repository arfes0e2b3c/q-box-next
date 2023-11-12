'use client'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'

const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies()
  const router = useRouter()

  if (!cookies.access_token || typeof cookies.access_token !== 'string') {
    router.push('/login')
    return null
  }

  try {
    const decodedAccessToken: { email: string; user_id: string } = jwtDecode(cookies.access_token)
    if (decodedAccessToken.email !== '' && decodedAccessToken.user_id !== '') {
      throw new Error('ログイン情報が不正です')
    }
  } catch (error) {
    router.push('/login')
    return null
  }

  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
