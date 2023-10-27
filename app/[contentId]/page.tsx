import { PostForm } from '@/components/shared/PostBox'
import { QACardContainer } from '@/components/shared/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

import { fetchPostDetail } from '../api/fetchPostDetail'
import { fetchAllPostIds } from '../api/fetchAllPostIds'
import { BackButton } from '@/components/shared/BackButton'

export async function generateStaticParams() {
  const data = await fetchAllPostIds()
  const paths = await data.map((content) => {
    return { contentId: content.id }
  })
  return paths
}

export default async function IndividualPage({ params }: { params: { contentId: string } }) {
  const data = await fetchPostDetail(params.contentId)

  return (
    <main className={individualPage}>
      <BackButton />
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
