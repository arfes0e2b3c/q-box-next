'use client'
import { baseFont } from '@/consts/fonts'
import dayjs from 'dayjs'
import { AnswerPostBox } from '../shared/AnswerPostBox'
import { QA } from '@/types'
import { useState } from 'react'
import { answerCard, createdAt, box, question, toggleButton, button } from './index.css'
import { useDeletePost } from '@/hooks/useDeletePost'
import { LoadingButton } from '../shared/LoadingButton'

export const AnswerCardForAnswer = (props: {
  post: QA
  refetch: () => void
  isTwitterApiLimit: boolean
}) => {
  const post = props.post

  const [isOpened, setIsOpened] = useState(false)
  const toggleAnswerPostBox = () => setIsOpened(!isOpened)

  const deletePost = useDeletePost()
  const isLoading = deletePost.isLoading

  const clickHandler = () => {
    if (confirm('質問を削除しますか？')) {
      deletePost.mutate(post.id, {
        onSuccess: () => {
          alert('質問を削除しました')
          props.refetch()
        },
        onError: (error) => alert(error),
      })
    }
  }

  return (
    <li className={answerCard}>
      <p className={createdAt}>{dayjs(post.createdAt).format('MM/DD HH:mm')}</p>
      <div className={box}>
        <LoadingButton isLoading={isLoading} onClick={clickHandler} style={button}>
          削除
        </LoadingButton>
        <h3 className={question}>{post.question}</h3>
        <button
          className={[button, toggleButton, baseFont.className].join(' ')}
          onClick={() => toggleAnswerPostBox()}
        >
          開閉
        </button>
      </div>
      <AnswerPostBox
        isOpened={isOpened}
        contentId={post.id}
        question={post.question}
        isTwitterApiLimit={props.isTwitterApiLimit}
      />
    </li>
  )
}
