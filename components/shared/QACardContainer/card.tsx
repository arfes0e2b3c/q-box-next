import Image from 'next/image'
import base64url from 'base64url'
import { qACard } from './card.css'
export const Card = ({ text }: { text: string }) => {
  return (
    <Image
      className={qACard}
      src={
        'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/c9428b14ddd44f5485c2fc8ce7c2c61d/answered.png?w=1200&h=630&blend-mode=normal&blend-align=middle,center&blend=https%3A%2F%2Fassets.imgix.net%2F%7Etext%3Fw%3D1000%26txt-color%3D333%26txt-align%3Dcenter%26txt-size%3D44%26txtfont%3DZenKurenaido-Regular%26txt64%3D' +
        base64url(text)
      }
      width={1200}
      height={630}
      alt={text}
    />
  )
}
