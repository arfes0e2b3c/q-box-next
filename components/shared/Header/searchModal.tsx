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
    { id: 1, title: '履修登録' },
    { id: 2, title: '仮登録' },
    { id: 3, title: '英語' },
    { id: 4, title: '外国語' },
    { id: 5, title: '2外' },
    { id: 6, title: '抽選' },
    { id: 7, title: '成績' },
    { id: 8, title: '留学' },
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
