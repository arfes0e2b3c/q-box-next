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
import { tweetBaseText, twitterMaxLength } from '@/consts'
import { CSSTransition } from 'react-transition-group'
import { usePostAnswer } from '@/hooks/usePostAnswer'
import { useAnswerPageStore } from '@/store/answerPageStore'
import { LoadingButton } from '../LoadingButton'

export const AnswerPostBox = (props: {
  isOpened: boolean
  contentId: string
  question: string
}) => {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(countTweetLength(input + tweetBaseText))
  }, [input])

  const postAnswer = usePostAnswer()
  const postAsRequirementButtonClickHandler = () => {
    if (confirm('情報募集中として回答を投稿しますか？')) {
      postAnswer.mutate(
        {
          answer: input,
          contentId: props.contentId,
          state: 'requirement',
          question: props.question,
        },
        {
          onSuccess: () => {
            alert('回答を投稿しました')
            refetch()
          },
          onError: (error) => alert(error),
        }
      )
    }
  }
  const postAsAnswerButtonClickHandler = () => {
    if (confirm('回答を投稿しますか？')) {
      postAnswer.mutate(
        {
          answer: input,
          contentId: props.contentId,
          state: 'answered',
          question: props.question,
        },
        {
          onSuccess: () => {
            alert('回答を投稿しました')
            refetch()
          },
          onError: (error) => alert(error),
        }
      )
    }
  }
  const isLoading = postAnswer.isLoading

  const refetch = useAnswerPageStore((state) => state.refetch)

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
          <LoadingButton
            isLoading={isLoading}
            onClick={postAsRequirementButtonClickHandler}
            style={[button, requirement].join(' ')}
          >
            情報募集中として回答
          </LoadingButton>
          <LoadingButton
            isLoading={isLoading}
            onClick={postAsAnswerButtonClickHandler}
            style={[button, answered].join(' ')}
          >
            回答
          </LoadingButton>
        </div>
      </div>
    </CSSTransition>
  )
}
