'use client'
import { jwtDecode } from 'jwt-decode'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { isLoginText, loadingBody, mainContainer } from './layout.css'
import 'sanitize.css'
import { ShadowHeader } from '@/components/shared/ShadowHeader'
import { AnswerHeader } from '@/components/shared/AnswerHeader'
import { Footer } from '@/components/shared/Footer'
import { baseFont } from '@/consts/fonts'
import Providers from '@/app/(pages)/providers'
import { fetchIsLoggedIn } from '@/app/client/firebase/fetchIsLoggedIn'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies()
  const router = useRouter()
  const path = usePathname()
  const [isLogin, setIsLogin] = useState(false)

  const isRightAccessUser = async (email: string, user_id: string) =>
    fetchIsLoggedIn(email, user_id)

  useEffect(() => {
    ;(async function () {
      try {
        if (!cookies.access_token || typeof cookies.access_token !== 'string') {
          throw new Error('不正なアクセスです')
        }

        const { email, user_id }: { email: string; user_id: string } = jwtDecode(
          cookies.access_token
        )
        if (await isRightAccessUser(email, user_id)) {
          setIsLogin(true)
        } else {
          throw new Error('不正なアクセスです')
        }
      } catch (e) {
        router.push('/login')
      }
    })()
  }, [cookies])

  return isLogin ? (
    <html lang='ja'>
      <body className={[baseFont.className].join(' ')}>
        <AnswerHeader path={path} />
        <ShadowHeader />
        <Providers>
          <div className={mainContainer}>{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  ) : (
    <html lang='ja'>
      <body className={loadingBody}>
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
