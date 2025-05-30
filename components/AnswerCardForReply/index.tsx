'use client'
import { QA } from '@/types'
import { answerCardForReply, question, answer } from './index.css'
import { ReplyCard } from './replyCard'

export const AnswerCardForReply = (props: { post: QA; isTwitterApiLimit: boolean }) => {
  const post = props.post
  const isTwitterApiLimit = props.isTwitterApiLimit

  return (
    <li className={answerCardForReply} key={post.id}>
      <h3 className={question}>{post.question}</h3>
      <p className={answer}>{post.answer}</p>
      {post.replies.map((reply) => (
        <ReplyCard
          key={reply.id}
          reply={reply}
          replyTweetId={post.replyTweetId ?? ''}
          postId={post.id}
          isTwitterApiLimit={isTwitterApiLimit}
        />
      ))}
    </li>
  )
}
