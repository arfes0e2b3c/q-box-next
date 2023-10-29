import { PostForm } from '@/components/shared/PostBox'
import { QACardContainer } from '@/components/shared/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

import { fetchPostDetail } from '../../../client/fetchPostDetail'
import { fetchAllPostIds } from '../../../client/fetchAllPostIds'
import { BackButton } from '@/components/shared/BackButton'
import { exchangeStateToUrl } from '@/lib'
import base64url from 'base64url'
import { text } from 'stream/consumers'

export async function generateStaticParams() {
  const data = await fetchAllPostIds()
  const paths = await data.map((content) => {
    return { contentId: content.id }
  })
  return paths
}

export const generateMetadata = async ({ params }: { params: { contentId: string } }) => {
  const data = await fetchPostDetail(params.contentId)
  const baseSrc = exchangeStateToUrl(data.state)
  return {
    title: data.question,
    description: '質問詳細ページです',
    openGraph: {
      images: [
        {
          url: [
            baseSrc +
              '?w=1200&h=630&blend-mode=normal&blend-align=middle,center&blend=https%3A%2F%2Fassets.imgix.net%2F%7Etext%3Fw%3D1000%26txt-color%3D333%26txt-align%3Dcenter%26txt-size%3D44%26txtfont%3DZenKurenaido-Regular%26txt64%3D' +
              base64url(data.question),
          ],
        },
      ],
    },
  }
}

export default async function IndividualPage({ params }: { params: { contentId: string } }) {
  const data = await fetchPostDetail(params.contentId)

  return (
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
  )
}
