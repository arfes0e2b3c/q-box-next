'use client'
import { baseFont } from '@/consts/fonts'
import dayjs from 'dayjs'
import { AnswerPostBox } from '../AnswerPostBox'
import { QA } from '@/types'
import { useState } from 'react'
import { answerCard, createdAt, box, question, toggleButton, button } from './index.css'

export const AnswerCardForAnswer = (props: { post: QA }) => {
  const post = props.post

  const [isOpened, setIsOpened] = useState(false)
  const toggleAnswerPostBox = () => setIsOpened(!isOpened)

  return (
    <li className={answerCard} key={post.id}>
      <p className={createdAt}>{dayjs(post.createdAt).format('MM/DD HH:mm')}</p>
      <div className={box}>
        <button className={[button, baseFont.className].join(' ')}>削除</button>
        <h3 className={question}>{post.question}</h3>
        <button
          className={[button, toggleButton, baseFont.className].join(' ')}
          onClick={() => toggleAnswerPostBox()}
        >
          開閉
        </button>
      </div>
      <AnswerPostBox isOpened={isOpened} />
    </li>
  )
}
