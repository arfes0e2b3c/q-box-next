import { limit, noMoreResult, page, pageInner, title, twitterApiRequestCount } from './page.css'
// import { Metadata } from 'next'
import { AnswerCardForReply } from '@/components/AnswerCardForReply'
import { MicroCMSResponse } from '@/types'

// export const metadata: Metadata = {
//   title: '管理者ページ',
//   description: 'お手伝いサークルの管理者用ページです。',
// }

export default async function Answer() {
  const replyRes = await fetch(`http://localhost:3000/api/replies/unanswered`, {
    cache: 'no-store',
  })
  const replyData: MicroCMSResponse = await replyRes.json()

  const logRes = await fetch(`http://localhost:3000/api/twitter_api_logs`)
  const logData: MicroCMSResponse = await logRes.json()

  const isTwitterApiLimit = logData?.totalCount && logData?.totalCount >= 50

  const isLoading = !replyData || !logData

  if (isLoading) {
    return <div>ローディング中</div>
  }

  return (
    <main className={page}>
      <h2 className={title}>未回答の情報提供：{replyData?.totalCount}件</h2>
      <h3 className={[twitterApiRequestCount, isTwitterApiLimit ? limit : ''].join(' ')}>
        今日のTwitterAPI使用数：{logData?.totalCount}
        {isTwitterApiLimit ? '（上限に達しました）' : ''}
      </h3>

      <ul className={pageInner}>
        {replyData && replyData.contents.length ? (
          replyData.contents.map((post) => <AnswerCardForReply key={post.id} post={post} />)
        ) : (
          <p>質問はありません</p>
        )}
      </ul>
    </main>
  )
}
