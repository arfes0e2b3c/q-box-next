'use client'
import {
  link,
  searchModal,
  searchModalInner,
  searchModalItem,
  searchModalList,
  searchModalTitle,
} from './searchModal.css'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export const SearchModal = ({ onBlur }: { onBlur: () => void }) => {
  const keywords = [
    { id: 1, title: '２外' },
    { id: 2, title: '単位' },
    { id: 3, title: '履修' },
    { id: 4, title: '成績' },
  ]
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={searchModal}
        className={searchModal}
        initial={{ opacity: 0, y: '-10px' }}
        animate={{ opacity: 1, y: '0px' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className={searchModalInner}>
          <h2 className={searchModalTitle}>よく検索されるキーワード</h2>
          <ul className={searchModalList}>
            {keywords.map((keyword) => (
              <li className={searchModalItem} key={keyword.id}>
                <Link className={link} href={`search?q=${keyword.title}`} onClick={() => onBlur()}>
                  {keyword.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
