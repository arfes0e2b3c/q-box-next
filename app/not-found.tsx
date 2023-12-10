import { QACardContainer } from '@/components/QACardContainer'
import MotionWrapper from '@/components/shared/MotionWrapper'
import { notFoundQAData } from '@/consts'
import { individualPage, qAContainer } from './not-found.css'

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
