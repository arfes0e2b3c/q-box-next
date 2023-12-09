import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import { ShadowHeader } from '@/components/shared/ShadowHeader'
import { baseFont } from '@/consts/fonts'
import type { Metadata } from 'next'
import 'sanitize.css'
import { mainContainer } from './(pages)/(user)/layout.css'
import Providers from './(pages)/providers'

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'お手伝いサークル公式サイト',
  title: 'お手伝いサークル公式サイト',
  creator: 'お手伝いサークル',
  publisher: 'お手伝いサークル',
  description: '横浜国立大学お手伝いサークルが運営する公式サイトです。',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: '/otecir-default.png',
        width: 1200,
        height: 630,
        alt: 'お手伝いサークル公式サイト',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お手伝いサークル公式サイト',
    description: '横浜国立大学お手伝いサークルが運営する公式サイトです。',
    images: [
      {
        url: '/otecir-default.png',
        alt: 'お手伝いサークル公式サイト',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={baseFont.className}>
        <Header />
        <ShadowHeader />
        <div className={mainContainer}>
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  )
}
