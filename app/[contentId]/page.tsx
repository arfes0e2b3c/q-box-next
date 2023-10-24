import { PostForm } from '@/components/shared/PostBox'
import { MicroCMSResponse, qA } from '@/types'
import { QACardContainer } from '@/components/shared/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

import { fetchPostDetail } from '../api/fetchPostDetail'

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/all_ids')
  const { data }: { data: qA[] } = await res.json()

  const paths = await data.map((content) => {
    return { contentId: content.id }
  })
  return paths
}

export default async function IndividualPage({ params }: { params: { contentId: string } }) {
  const data = await fetchPostDetail(params.contentId)
  return (
    <main className={individualPage}>
      <div className={qAContainer}>
        <QACardContainer qAData={data} />
        <PostForm mode={'reply'} />
      </div>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
    </main>
  )
}
