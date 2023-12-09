'use client'

import { useEffect, useRef, useState } from 'react'
import { SearchModal } from './searchModal'
import { searchInput, searchSection } from './searchSection.css'
import { baseFont } from '@/consts/fonts'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { searchModal } from './searchModal.css'

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
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            key={'searchModal'}
            className={searchModal}
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: '0px' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <SearchModal onBlur={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
