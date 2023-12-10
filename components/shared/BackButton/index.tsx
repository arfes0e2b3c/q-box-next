'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { backButton, backButtonWrapper } from './index.css'

export const BackButton = () => {
  const router = useRouter()
  return (
    <div className={backButtonWrapper}>
      <Link className={backButton} href='#' onClick={() => router.back()}>
        ＜戻る
      </Link>
    </div>
  )
}
