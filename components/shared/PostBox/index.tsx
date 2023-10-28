'use client'

import { baseFont } from '@/consts/fonts'
import {
  disabled,
  noticeMessage,
  postBox,
  postBoxInput,
  postBoxTitle,
  submitButton,
} from './index.css'
import { PostMode } from '@/types'
import { useState } from 'react'
import { useCreatePost } from '@/app/api/useCreatePost'
import { Oval } from 'react-loader-spinner'

export const PostForm = ({ mode }: { mode: PostMode }) => {
  const [question, setQuestion] = useState('')
  const isQuestion = mode === 'question'
  const createPost = useCreatePost()
  const isLoading = createPost.isLoading
  const formProps = isQuestion
    ? {
        buttonText: '質問する',
        onSubmit: async (question: string) => {
          if (confirm('質問を投稿しますか？')) {
            createPost.mutate(question, {
              onSuccess: () => alert('質問を投稿しました！'),
              onError: (error) => alert(error),
            })
          }
        },
        placeholder: '例：１年経済学部です。履修登録はどこでできますか？',
      }
    : {
        buttonText: '情報を提供する',
        onSubmit: () => console.log('reply'),
        placeholder: 'この質問に関する情報提供をいただけますと幸いです！',
      }
  return (
    <form className={postBox}>
      {isQuestion && <h3 className={postBoxTitle}>お手伝いサークルに質問する</h3>}
      <textarea
        className={[postBoxInput, baseFont.className].join(' ')}
        name='question'
        placeholder={formProps.placeholder}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      {isQuestion && (
        <p className={noticeMessage}>正確な回答のため、学部と学年の併記をお願いします！</p>
      )}
      <button
        className={[submitButton, baseFont.className, isLoading && disabled].join(' ')}
        onClick={(event) => {
          event.preventDefault()
          formProps.onSubmit(question)
        }}
        disabled={isLoading}
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
          formProps.buttonText
        )}
      </button>
    </form>
  )
}
