import Image from 'next/image'
import { qACard } from './card.css'
export const Card = ({ text, contentId }: { text: string; contentId?: string }) => {
  const imgSrc = `${process.env.NEXT_PUBLIC_CLOUDFRONT_BASE_URL}/${contentId}`
  return (
    <Image
      className={qACard}
      src={imgSrc}
      width={1200}
      height={630}
      alt={text}
      sizes='(max-width: 768px) 400px, 210'
    />
  )
}
