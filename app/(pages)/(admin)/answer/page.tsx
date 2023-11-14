import { fetchSlicePosts } from '@/app/client/fetchSlicePosts'
import { page, pageInner, title } from './page.css'
import { Metadata } from 'next'
import { AnswerCardForAnswer } from '@/components/shared/AnswerCardForAnswer'

export const metadata: Metadata = {
  title: '管理者ページ',
  description: 'お手伝いサークルの管理者用ページです。',
}

export default async function Answer() {
  const posts = await fetchSlicePosts(0)

  return (
    <main className={page}>
      <h2 className={title}>回答待ちの質問：未回答{posts.totalCount}件</h2>
      <ul className={pageInner}>
        {posts.contents.length ? (
          <>
            {posts.contents.map((post) => (
              <AnswerCardForAnswer key={post.id} post={post} />
            ))}
          </>
        ) : (
          <p>質問はありません</p>
        )}
      </ul>
    </main>
  )
}
