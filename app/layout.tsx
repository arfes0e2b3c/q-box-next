import 'sanitize.css'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <p>わろた</p>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
