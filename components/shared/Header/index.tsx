import Link from 'next/link'
import { SearchSection } from './searchSection'
import { appTitle, appTitleContainer, header, linkToHome } from './index.css'
import { MotionAnimatePresense } from '../MotionAnimatePresense'
import { MotionHeader } from '../Motion/motionHeader'
export const Header = () => {
  return (
    <MotionAnimatePresense mode='wait'>
      <MotionHeader
        className={header}
        initial={{ opacity: 0, y: '-10px' }}
        animate={{ opacity: 1, y: '0px' }}
        exit={{ opacity: 0, y: '-10px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Link className={linkToHome} href='/'>
          最新の質問へ
        </Link>
        <div className={appTitleContainer}>
          <h1 className={appTitle}>お手伝いサークル</h1>
        </div>
        <SearchSection />
      </MotionHeader>
    </MotionAnimatePresense>
  )
}
