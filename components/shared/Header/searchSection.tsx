'use client'

import { useEffect, useRef, useState } from 'react'
import { SearchModal } from './searchModal'
import { searchInput, searchSection } from './searchSection.css'
import { baseFont } from '@/consts/fonts'
import { useRouter } from 'next/navigation'

export const SearchSection = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const isEnterKey = (key: string) => key === 'Enter'

  const searchSectionRef = useRef<HTMLDivElement>(null)
  const isOutSide = (event: MouseEvent) =>
    searchSectionRef.current &&
    event.target instanceof Node &&
    !(searchSectionRef.current as HTMLElement).contains(event.target)

  const handleClickOutside = (event: MouseEvent) => isOutSide(event) && setIsOpen(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <section className={searchSection} ref={searchSectionRef}>
      <input
        className={[searchInput, baseFont.className].join(' ')}
        type='text'
        placeholder='キーワードで検索'
        onFocus={() => {
          console.log('vercel-url', process.env.NEXT_PUBLIC_VERCEL_URL || 'no url')
          console.log('branch-url', process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL || 'no url')
          setIsOpen(true)
        }}
        onKeyUp={(event) => {
          if (isEnterKey(event.key) && event.currentTarget.value !== '') {
            router.push(`/search/?q=${event.currentTarget.value}`)
            setIsOpen(false)
            event.currentTarget.blur()
          }
        }}
      />
      {isOpen && <SearchModal onBlur={() => setIsOpen(false)} />}
    </section>
  )
}