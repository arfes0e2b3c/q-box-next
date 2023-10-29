import { Card } from './card'
import dayjs from 'dayjs'
import {
  answer,
  cardButton,
  createdAt,
  mainPost,
  qaCardContainer,
  repliesContainer,
} from './index.css'
import Link from 'next/link'
import { QA } from '@/types'
import { exchangeStateToStyle } from '@/lib'

export const QACardContainer = ({ qAData, isLink = false }: { qAData: QA; isLink?: boolean }) => {
  const stateStytle = exchangeStateToStyle(qAData.state)
  return (
    <section className={qaCardContainer}>
      <div className={mainPost}>
        <p className={[createdAt, stateStytle].join(' ')}>
          {dayjs(qAData.createdAt).format('YYYY/MM/DD')}
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
