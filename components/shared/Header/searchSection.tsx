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
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchSectionRef.current &&
      event.target instanceof Node &&
      !(searchSectionRef.current as HTMLElement).contains(event.target)
    ) {
      console.log('click outside')

      setIsOpen(false)
    }
    console.log('click inside')
  }

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
        onFocus={() => setIsOpen(true)}
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
