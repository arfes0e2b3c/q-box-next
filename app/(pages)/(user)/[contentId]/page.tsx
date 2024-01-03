import { PostForm } from '@/components/shared/PostBox'
import { QACardContainer } from '@/components/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

import { fetchPostDetail } from '../../../client/microcms/post/fetchPostDetail'
import { fetchAllPostIds } from '../../../client/microcms/post/fetchAllPostIds'
import { BackButton } from '@/components/shared/BackButton'
import MotionWrapper from '@/components/shared/MotionWrapper'
import base64url from 'base64url'
import { calculateFontSize, exchangeStateToUrl } from '@/lib'
import { AnswerState } from '@/types'

const fontSizeByText = (question: string): number => calculateFontSize(question)

const baseUrl = (state: AnswerState): string => exchangeStateToUrl(state)
const generateImageUrl = (question: string, state: AnswerState): string =>
  `${baseUrl(
    state
  )}?w=1200&h=630&blend-mode=normal&blend-align=middle,center&blend=https%3A%2F%2Fassets.imgix.net%2F%7Etext%3Fw%3D1000%26txt-color%3D333%26txt-align%3Dcenter%26txt-size%3D${fontSizeByText(
    question
  )}%26txtfont%3DZenMaruGothic-Regular%26txt64%3D${base64url(question)}`

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
          url: [generateImageUrl(data.question, data.state)],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.question,
      description: 'お手伝いサークル公式サイト',
      images: [
        {
          url: [generateImageUrl(data.question, data.state)],
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
