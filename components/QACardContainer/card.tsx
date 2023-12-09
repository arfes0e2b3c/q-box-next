import Image from 'next/image'
import { qACard, qACardImage } from './card.css'
import { MotionDiv } from '../shared/Motion/motionDiv'

export const Card = ({ text, contentId }: { text: string; contentId?: string }) => {
  const imgSrc = `${process.env.NEXT_PUBLIC_CLOUDFRONT_BASE_URL}/${contentId}`
  return (
    <MotionDiv
      className={qACard}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Image
        className={qACardImage}
        src={imgSrc}
        width={1200}
        height={630}
        alt={text}
        sizes='(max-width: 768px) 400px, 210'
      />
    </MotionDiv>
  )
}
