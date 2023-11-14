import { baseFont } from '@/consts/fonts'
import { Reply } from '@/types'
import dayjs from 'dayjs'
import {
  replyContainer,
  createdAt,
  box,
  button,
  replySentence,
  answered,
  registerButton,
} from './replyCard.css'

export const ReplyCard = (props: { reply: Reply }) => {
  const reply = props.reply

  return (
    <div className={replyContainer} key={reply.id}>
      <p className={createdAt}>{dayjs(reply.createdAt).format('MM/DD HH:mm')}</p>
      <div className={box}>
        <button className={[button, baseFont.className].join(' ')}>削除</button>
        <p className={replySentence}>{reply.replySentence}</p>
      </div>
      <button className={[registerButton, answered, baseFont.className].join(' ')}>
        情報提供を公開
      </button>
    </div>
  )
}
