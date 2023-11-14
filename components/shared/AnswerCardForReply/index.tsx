'use client'
import { QA } from '@/types'
import { answerCardForReply, question, answer } from './index.css'
import { ReplyCard } from './replyCard'

export const AnswerCardForReply = (props: { post: QA }) => {
  const post = props.post

  return (
    <li className={answerCardForReply} key={post.id}>
      <h3 className={question}>{post.question}</h3>
      <p className={answer}>{post.answer}</p>
      {post.replies.map((reply) => (
        <ReplyCard key={reply.id} reply={reply} />
      ))}
    </li>
  )
}
