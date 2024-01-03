import { PostForm } from '@/components/shared/PostBox'
import { QACardContainer } from '@/components/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

import { fetchPostDetail } from '../../../client/microcms/post/fetchPostDetail'
import { fetchAllPostIds } from '../../../client/microcms/post/fetchAllPostIds'
import { BackButton } from '@/components/shared/BackButton'
import MotionWrapper from '@/components/shared/MotionWrapper'

export async function generateStaticParams() {
  const data = await fetchAllPostIds()
  const paths = await data.map((content) => {
    return { contentId: content.id }
  })
  return paths
}

export const generateMetadata = async ({ params }: { params: { contentId: string } }) => {
  const data = await fetchPostDetail(params.contentId)
  return {
    title: data.question,
    description: 'お手伝いサークル公式サイト',
    openGraph: {
      images: [
        {
          url: [`${process.env.NEXT_PUBLIC_CLOUDFRONT_BASE_URL}/${params.contentId}`],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.question,
      description: 'お手伝いサークル公式サイト',
      images: [
        {
          url: [`${process.env.NEXT_PUBLIC_CLOUDFRONT_BASE_URL}/${params.contentId}`],
        },
      ],
    },
  }
}

export default async function IndividualPage({ params }: { params: { contentId: string } }) {
  const data = await fetchPostDetail(params.contentId)

  return (
    <MotionWrapper>
      <main className={individualPage}>
        <BackButton />
        <div className={qAContainer}>
          <QACardContainer qAData={data} />
          <PostForm mode={'reply'} replyFor={params.contentId} />
        </div>
        <div className={formContainer}>
          <PostForm mode={'question'} />
        </div>
      </main>
    </MotionWrapper>
  )
}
