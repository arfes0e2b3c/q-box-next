import Image from 'next/image'
import base64url from 'base64url'
import { qACard } from './card.css'
import { AnswerState } from '@/types'
import { exchangeStateToUrl } from '@/lib'
export const Card = ({ text, mode = 'answered' }: { text: string; mode?: AnswerState }) => {
  const baseSrc = exchangeStateToUrl(mode)
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
