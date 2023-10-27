'use client'

import { useState } from 'react'
import { SearchModal } from './searchModal'
import { searchInput, searchSection } from './searchSection.css'
import { baseFont } from '@/consts/fonts'
import { useRouter } from 'next/navigation'

export const SearchSection = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const isEnterKey = (key: string) => key === 'Enter'
  return (
    <section className={searchSection}>
      <input
        className={[searchInput, baseFont.className].join(' ')}
        type='text'
        placeholder='キーワードで検索'
        onFocus={() => setIsOpen(true)}
        onKeyUp={(event) => {
          if (isEnterKey(event.key) && event.currentTarget.value !== '') {
            router.push(`/search/?q=${event.currentTarget.value}`)
          }
        }}
      />
      {isOpen && <SearchModal onBlur={() => setIsOpen(false)} />}
    </section>
  )
}
