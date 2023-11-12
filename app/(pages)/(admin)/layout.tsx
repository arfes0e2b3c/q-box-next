'use client'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { body, isLoginText } from './layout.css'
import { Oval } from 'react-loader-spinner'
import { isRightAccessUser } from '@/lib'
import { Header } from '@/components/shared/Header'
import { ShadowHeader } from '@/components/shared/ShadowHeader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (!cookies.access_token || typeof cookies.access_token !== 'string') {
        router.push('/login')
      }

      const { email, user_id }: { email: string; user_id: string } = await jwtDecode(
        cookies.access_token
      )
      if (isRightAccessUser(email, user_id)) {
        setIsLogin(true)
      } else {
        router.push('/login')
      }
    })()
  }, [cookies])

  return isLogin ? (
    <html lang='ja'>
      <body>
        <Header />
        <ShadowHeader />
        {children}
      </body>
    </html>
  ) : (
    <html lang='ja'>
      <body className={body}>
        {/* <Oval
          strokeWidth={5}
          width={80}
          height={80}
          color='#888'
          secondaryColor='#ddd'
          ariaLabel='loading'
        /> */}
        <p className={isLoginText}>ログイン中です...</p>
      </body>
    </html>
  )
}
