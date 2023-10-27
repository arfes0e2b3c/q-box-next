import { Card } from './card'
import dayjs from 'dayjs'
import {
  answer,
  answered,
  cardButton,
  createdAt,
  mainPost,
  qaCardContainer,
  repliesContainer,
  requirement,
} from './index.css'
import Link from 'next/link'
import { QA } from '@/types'

export const QACardContainer = ({ qAData, isLink = false }: { qAData: QA; isLink?: boolean }) => {
  const answerState = qAData.state === 'answered' ? answered : requirement
  return (
    <section className={qaCardContainer}>
      <div className={mainPost}>
        <p className={[createdAt, answerState].join(' ')}>
          {dayjs(qAData.createdAt).format('MM/DD HH:mm')}
        </p>
        {isLink ? (
          <Link className={cardButton} href={qAData.id}>
            <Card text={qAData.question} mode={qAData.state} />
          </Link>
        ) : (
          <Card text={qAData.question} mode={qAData.state} />
        )}

        <p className={answer}>{qAData.answer}</p>
      </div>
      <div className={repliesContainer}>
        {qAData.replies.map((reply) => (
          <Card key={reply.id} text={reply.replySentence} />
        ))}
      </div>
    </section>
  )
}
