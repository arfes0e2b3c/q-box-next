'use client'
import { jwtDecode } from 'jwt-decode'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { body, isLoginText } from './layout.css'
import 'sanitize.css'

import { isRightAccessUser } from '@/lib'
import { ShadowHeader } from '@/components/shared/ShadowHeader'
import { AnswerHeader } from '@/components/shared/AnswerHeader'
import { Footer } from '@/components/shared/Footer'
import { baseFont } from '@/consts/fonts'
import Providers from '@/app/providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies()
  const router = useRouter()
  const path = usePathname()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    try {
      if (!cookies.access_token || typeof cookies.access_token !== 'string') {
        throw new Error('不正なアクセスです')
      }

      const { email, user_id }: { email: string; user_id: string } = jwtDecode(cookies.access_token)
      if (isRightAccessUser(email, user_id)) {
        setIsLogin(true)
      } else {
        throw new Error('不正なアクセスです')
      }
    } catch (e) {
      router.push('/login')
    }
  }, [cookies])

  return isLogin ? (
    <html lang='ja'>
      <body className={[body, baseFont.className].join(' ')}>
        <AnswerHeader path={path} />
        <ShadowHeader />
        <Providers>{children}</Providers>
        <Footer />
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
