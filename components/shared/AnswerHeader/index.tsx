'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { appTitle, appTitleContainer, danger, header, linkToHome, noBorder } from './index.css'
import { fetchHasUnanseredPost } from '@/app/client/microcms/post/fetchHasUnanseredPost'
import { fetchHasUnanseredReply } from '@/app/client/microcms/reply/fetchHasUnanseredReply'

export const AnswerHeader = (props: { path: string }) => {
  const [hasUnanswered, setHasUnanswered] = useState({
    post: false,
    reply: false,
  })

  useEffect(() => {
    const fetchPost = async () => {
      const hasPost = await fetchHasUnanseredPost()
      const hasReply = await fetchHasUnanseredReply()
      setHasUnanswered({
        post: hasPost,
        reply: hasReply,
      })
    }
    fetchPost()
  }, [])

  return (
    <header className={header}>
      <Link className={linkToHome} href='/'>
        最新の質問へ
      </Link>
      <div className={appTitleContainer}>
        <h1 className={appTitle}>お手伝いサークル</h1>
      </div>
      <Link
        className={[linkToHome, noBorder].join(' ')}
        href={props.path === '/answer' ? '/answer/reply' : '/answer'}
      >
        {props.path === '/answer' ? (
          <span className={hasUnanswered.reply ? danger : ''}>
            未回答の返信：
            {hasUnanswered.reply ? 'あり' : 'なし'}
          </span>
        ) : (
          <span className={hasUnanswered.post ? danger : ''}>
            未回答の投稿：
            {hasUnanswered.post ? 'あり' : 'なし'}
          </span>
        )}
      </Link>
    </header>
  )
}
