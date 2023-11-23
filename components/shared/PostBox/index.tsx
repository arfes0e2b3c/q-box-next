'use client'

import { baseFont } from '@/consts/fonts'
import { noticeMessage, postBox, postBoxInput, postBoxTitle } from './index.css'
import { PostMode } from '@/types'
import { useRef, useState } from 'react'
import { useCreatePost } from '@/hooks/useCreatePost'
import { useCreateReply } from '@/hooks/useCreateReply'
import { button } from '../AnswerCardForAnswer/index.css'
import { LoadingButton } from '../LoadingButton'

export const PostForm = ({ mode, replyFor }: { mode: PostMode; replyFor?: string }) => {
  const [input, setInput] = useState('')
  const textarefRef = useRef<HTMLTextAreaElement>(null)

  const isQuestion = mode === 'question'

  const createPost = useCreatePost()
  const createReply = useCreateReply()
  const isLoading = createPost.isLoading || createReply.isLoading

  const formProps = isQuestion
    ? {
        buttonText: '質問する',
        onSubmit: () => {
          if (confirm('質問を投稿しますか？')) {
            createPost.mutate(input, {
              onSuccess: () => {
                alert('質問を投稿しました！')
                setInput('')
                textarefRef.current && (textarefRef.current.value = '')
              },
              onError: (error) => alert(error),
            })
          }
        },
        placeholder: '例：１年経済学部です。履修登録はどこでできますか？',
      }
    : {
        buttonText: '情報を提供する',
        onSubmit: () => {
          if (
            confirm('情報提供を投稿しますか？質問は質問用フォームから投稿をお願いします！') &&
            replyFor
          ) {
            createReply.mutate(
              { reply: input, replyFor },
              {
                onSuccess: () => alert('情報提供を投稿しました！'),
                onError: (error) => alert(error),
              }
            )
          }
        },
        placeholder: 'この質問に関する情報提供をいただけますと幸いです！',
      }
  const submitButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    formProps.onSubmit()
  }

  return (
    <form className={postBox}>
      {isQuestion && <h3 className={postBoxTitle}>お手伝いサークルに質問する</h3>}
      <textarea
        className={[postBoxInput, baseFont.className].join(' ')}
        ref={textarefRef}
        name='question'
        placeholder={formProps.placeholder}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      {isQuestion && (
        <p className={noticeMessage}>正確な回答のため、学部と学年の併記をお願いします！</p>
      )}
      <LoadingButton
        isLoading={isLoading}
        onClick={(event) => event && submitButtonClickHandler(event)}
        style={button}
      >
        {formProps.buttonText}
      </LoadingButton>
    </form>
  )
}
