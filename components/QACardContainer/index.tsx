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
  const formattedCreatedAt = dayjs(qAData.createdAt).format('YYYY/MM/DD')
  const stateStytle = exchangeStateToStyle(qAData.state)
  return (
    <section className={qaCardContainer}>
      <div className={mainPost}>
        <p className={[createdAt, stateStytle].join(' ')}>
          {formattedCreatedAt === '2023/03/13' ? '過去の質問' : formattedCreatedAt}
        </p>
        {isLink ? (
          <Link className={cardButton} href={qAData.id}>
            <Card text={qAData.question} contentId={qAData.id} />
          </Link>
        ) : (
          <Card text={qAData.question} contentId={qAData.id} />
        )}

        <p className={answer}>{qAData.answer}</p>
      </div>
      <div className={repliesContainer}>
        {qAData.replies.map((reply) => (
          <Card key={reply.id} text={reply.replySentence} contentId={reply.id} />
        ))}
      </div>
    </section>
  )
}
