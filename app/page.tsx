import { PostForm } from '@/components/shared/PostBox'

import { formContainer, topPage } from './page.css'
import { QAListWrapper } from '@/components/shared/qAListWrapper'

export default function Home() {
  return (
    <main className={topPage}>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
      <QAListWrapper queryKey='newPosts' title='最新の質問' />
    </main>
  )
}
