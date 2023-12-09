import { QACardContainer } from '@/components/QACardContainer'
import MotionWrapper from '@/components/shared/MotionWrapper'
import { individualPage, qAContainer } from './(pages)/(user)/[contentId]/page.css'
import { notFoundQAData } from '@/consts'

export default function NotFound() {
  return (
    <MotionWrapper>
      <main className={individualPage}>
        <div className={qAContainer}>
          <QACardContainer qAData={notFoundQAData} />
        </div>
      </main>
    </MotionWrapper>
  )
}
