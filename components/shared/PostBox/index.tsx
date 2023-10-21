'use client'

import { baseFont } from '@/consts/fonts'
import { noticeMessage, postBox, postBoxInput, postBoxTitle, submitButton } from './index.css'
import { PostMode } from '@/types'

export const PostForm = ({ mode }: { mode: PostMode }) => {
  const isQuestion = mode === 'question'
  const formProps = isQuestion
    ? {
        buttonText: '質問する',
        onSubmit: () => console.log('question'),
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
      ></textarea>
      {isQuestion && (
        <p className={noticeMessage}>正確な回答のため、学部と学年の併記をお願いします！</p>
      )}
      <button className={[submitButton, baseFont.className].join(' ')} onClick={formProps.onSubmit}>
        {formProps.buttonText}
      </button>
    </form>
  )
}
