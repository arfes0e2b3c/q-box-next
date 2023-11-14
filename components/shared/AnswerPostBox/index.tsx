'use client'
import { useEffect, useState } from 'react'
import {
  alert,
  answerPostBox,
  answered,
  button,
  buttonContainer,
  requirement,
  textInput,
} from './index.css'
import { countTweetLength } from '@/lib'
import { TweetLengthGauge } from './tweetLengthGauge'
import { twitterMaxLength } from '@/consts'
import { CSSTransition } from 'react-transition-group'
import { baseFont } from '@/consts/fonts'

export const AnswerPostBox = (props: { isOpened: boolean }) => {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(countTweetLength(input + baseText))
  }, [input])

  const baseText = `\n#お手伝いサークル${process.env.NEXT_PUBLIC_BASE_URL}`
  return (
    <CSSTransition in={props.isOpened} timeout={0} classNames='fade'>
      <div className={answerPostBox}>
        <textarea className={textInput} onChange={(e) => setInput(e.target.value)}></textarea>
        <p className={alert}>
          {count > twitterMaxLength
            ? `合計${
                ((Math.ceil(count / twitterMaxLength) - 1) * twitterMaxLength) / 2
              }字以上のため${Math.ceil(count / twitterMaxLength)}個に分割されます。`
            : '　'}
        </p>
        <div className={buttonContainer}>
          <TweetLengthGauge count={count} />
          <button className={[button, requirement, baseFont.className].join(' ')}>
            情報募集中として回答
          </button>
          <button className={[button, answered, baseFont.className].join(' ')}>回答</button>
        </div>
      </div>
    </CSSTransition>
  )
}
