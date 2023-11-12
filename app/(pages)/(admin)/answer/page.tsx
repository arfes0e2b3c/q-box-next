import { fetchSlicePosts } from '@/app/client/fetchSlicePosts'
import dayjs from 'dayjs'
import {
  box,
  button,
  card,
  createdAt,
  page,
  pageInner,
  question,
  title,
  toggleButton,
} from './page.css'
import { Metadata } from 'next'
import { baseFont } from '@/consts/fonts'

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
        {/* <p v-show='!posts[0]'>質問はありません</p> */}
        {posts.contents.map((post) => (
          <li className={card} key={post.id}>
            <p className={createdAt}>{dayjs(post.createdAt).format('MM/DD HH:mm')}</p>
            <div className={box}>
              <button className={[button, baseFont.className].join(' ')}>削除</button>
              <h3 className={question}>{post.question}</h3>
              <button className={[button, toggleButton, baseFont.className].join(' ')}>開閉</button>
            </div>
            {/* <SharedAnswerSendSentence className='send-sentence' /> */}
          </li>
        ))}
      </ul>
    </main>
  )
}
