'use client'

import { useState } from 'react'
import { SearchModal } from './searchModal'
import { searchInput, searchSection } from './searchSection.css'
import { baseFont } from '@/consts/fonts'

export const SearchSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => event.key === 'Enter'
  return (
    <section className={searchSection} onFocus={() => setIsOpen(true)}>
      <input
        className={[searchInput, baseFont.className].join(' ')}
        type='text'
        onKeyUp={(event) => console.log(isEnterKey(event) || 'No')}
      />
      {isOpen && <SearchModal onBlur={() => setIsOpen(false)} />}
    </section>
  )
}
