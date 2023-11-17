'use client'
import { baseFont } from '@/consts/fonts'
import dayjs from 'dayjs'
import { AnswerPostBox } from '../AnswerPostBox'
import { QA } from '@/types'
import { useState } from 'react'
import { answerCard, createdAt, box, question, toggleButton, button } from './index.css'
import { useDeletePost } from '@/app/client/useDeletePost'
import { Oval } from 'react-loader-spinner'

export const AnswerCardForAnswer = (props: { post: QA; refetch: () => void }) => {
  const post = props.post

  const [isOpened, setIsOpened] = useState(false)
  const toggleAnswerPostBox = () => setIsOpened(!isOpened)

  const deletePost = useDeletePost()
  const isLoading = deletePost.isLoading

  return (
    <li className={answerCard}>
      <p className={createdAt}>{dayjs(post.createdAt).format('MM/DD HH:mm')}</p>
      <div className={box}>
        <button
          className={[button, baseFont.className].join(' ')}
          disabled={isLoading}
          onClick={() => {
            if (confirm('質問を削除しますか？')) {
              deletePost.mutate(post.id, {
                onSuccess: () => {
                  alert('質問を削除しました')
                  props.refetch()
                },
                onError: (error) => alert(error),
              })
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
            '削除'
          )}
        </button>
        <h3 className={question}>{post.question}</h3>
        <button
          className={[button, toggleButton, baseFont.className].join(' ')}
          onClick={() => toggleAnswerPostBox()}
        >
          開閉
        </button>
      </div>
      <AnswerPostBox isOpened={isOpened} contentId={post.id} refetch={props.refetch} />
    </li>
  )
}
