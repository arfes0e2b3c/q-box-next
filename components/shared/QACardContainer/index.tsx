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

export const QACardContainer = ({ isLink }: { isLink: boolean }) => {
  const qAData = {
    id: 't7vh_w47q',
    createdAt: '2023-07-24T16:53:06.948Z',
    updatedAt: '2023-07-26T08:40:14.279Z',
    publishedAt: '2023-07-24T16:53:06.948Z',
    revisedAt: '2023-07-26T08:40:14.279Z',
    question: '経営学部です。\n「人・物と法」の期末テストの日程、教室はどこから確認できますか？？',
    answer:
      '7/28金～8/3木のうち、通常通りの時限に行われます。授業内でアナウンスされているはずです。(れいぱぱれ)',
    replyTweetId: '1684076314926665728',
    state: 'answered',
    replies: [
      {
        id: 'rbr-8ij-jlp',
        createdAt: '2023-07-26T04:54:33.907Z',
        updatedAt: '2023-07-26T05:40:57.595Z',
        publishedAt: '2023-07-26T04:54:33.907Z',
        revisedAt: '2023-07-26T05:40:57.595Z',
        replySentence:
          'LMSの経営学務係に、期末試験の日程、場所、対面かオンラインかなどが確認できる資料がありますよ。',
        replyAnswer: 'this.sentence',
        isDeleted: false,
        replyFor: {
          id: 't7vh_w47q',
        },
      },
      {
        id: 'kexjdyngt',
        createdAt: '2023-07-26T08:40:12.566Z',
        updatedAt: '2023-07-26T12:11:06.349Z',
        publishedAt: '2023-07-26T08:40:12.566Z',
        revisedAt: '2023-07-26T12:11:06.349Z',
        replySentence:
          'LMSでは持ち込み可能資料などの説明のみで日程、場所は\n書いていませんでした。対面であることは明記されていました。経営学務係の期末試験のところに載っていないのですが、試験の日程はいつもの授業と同じ時限、場所は授業が行われている教室ということでいいのでしょうか？\nまた、今学期の授業がどの教室で行われているか確認するのはどこからでしょうか？',
        isDeleted: true,
        replyFor: {
          id: 't7vh_w47q',
        },
      },
    ],
  }
  const answerState = qAData.state === 'answered' ? answered : requirement
  return (
    <section className={qaCardContainer}>
      <div className={mainPost}>
        <p className={[createdAt, answerState].join(' ')}>
          {dayjs(qAData.createdAt).format('MM/DD HH:mm')}
        </p>
        {isLink ? (
          <Link className={cardButton} href={qAData.id}>
            <Card text={qAData.question} />
          </Link>
        ) : (
          <Card text={qAData.question} />
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
