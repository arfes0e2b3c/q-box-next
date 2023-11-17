'use client'
import { useEffect, useState } from 'react'
import {
  alertText,
  answerPostBox,
  answered,
  button,
  buttonContainer,
  requirement,
  textInput,
} from './index.css'
import { countTweetLength } from '@/lib'
import { TweetLengthGauge } from './tweetLengthGauge'
import { baseText, twitterMaxLength } from '@/consts'
import { CSSTransition } from 'react-transition-group'
import { baseFont } from '@/consts/fonts'
import { usePostAnswer } from '@/app/client/usePostAnswer'
import { Oval } from 'react-loader-spinner'

export const AnswerPostBox = (props: {
  isOpened: boolean
  contentId: string
  refetch: () => void
}) => {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(countTweetLength(input + baseText))
  }, [input])

  const postAnswer = usePostAnswer()
  const isLoading = postAnswer.isLoading

  return (
    <CSSTransition in={props.isOpened} timeout={0} classNames='fade'>
      <div className={answerPostBox}>
        <textarea className={textInput} onChange={(e) => setInput(e.target.value)}></textarea>
        <p className={alertText}>
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
          <button
            className={[button, answered, baseFont.className].join(' ')}
            disabled={isLoading}
            onClick={() => {
              if (confirm('回答を投稿しますか？')) {
                postAnswer.mutate(
                  { answer: input, contentId: props.contentId },
                  {
                    onSuccess: () => {
                      alert('回答を投稿しました')
                      props.refetch()
                    },
                    onError: (error) => alert(error),
                  }
                )
              }
            }}
          >
            {isLoading ? (
              <Oval
                strokeWidth={'5'}
                height='25'
                width='25'
                ariaLabel='loading'
                color='white'
                secondaryColor='#333'
                wrapperStyle={{ cursor: 'not-allowed' }}
              />
            ) : (
              '回答する'
            )}
          </button>
        </div>
      </div>
    </CSSTransition>
  )
}
