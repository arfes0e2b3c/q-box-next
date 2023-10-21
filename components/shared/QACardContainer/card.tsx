import Image from 'next/image'
import base64url from 'base64url'
import { qACard } from './card.css'
import { AnswerState } from '@/types'
export const Card = ({ text, mode = 'answered' }: { text: string; mode?: AnswerState }) => {
  const baseSrc =
    mode === 'answered'
      ? 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/c9428b14ddd44f5485c2fc8ce7c2c61d/answered.png'
      : 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/f3e07d2865ab43a8a173e70d23d20638/requirement.png'
  return (
    <Image
      className={qACard}
      src={
        baseSrc +
        '?w=1200&h=630&blend-mode=normal&blend-align=middle,center&blend=https%3A%2F%2Fassets.imgix.net%2F%7Etext%3Fw%3D1000%26txt-color%3D333%26txt-align%3Dcenter%26txt-size%3D44%26txtfont%3DZenKurenaido-Regular%26txt64%3D' +
        base64url(text)
      }
      width={1200}
      height={630}
      alt={text}
    />
  )
}
