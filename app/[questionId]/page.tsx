import { PostForm } from '@/components/shared/PostBox'
import { MicroCMSResponse } from '@/types'
import { QACardContainer } from '@/components/shared/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

export async function generateStaticParams() {
  const res: MicroCMSResponse = await fetch(
    'https://q-box.microcms.io/api/v1/q_box_posts?fields=id&offset=0&limit=10',
    {
      headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_KEY || '' },
    }
  ).then((response) => response.json())

  const paths = await res.contents.map((content) => {
    return { questionId: content.id }
  })
  return paths
}

export default async function IndividualPage({ params }: { params: { questionId: string } }) {
  let res: MicroCMSResponse = { contents: [], totalCount: 0, offset: 0, limit: 0 }
  await fetch(
    'https://q-box.microcms.io/api/v1/q_box_posts?filters=id[equals]' + params.questionId,
    {
      headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_KEY || '' },
      next: { revalidate: 3600 },
    }
  )
    .then((response) => response.json())
    .then((data) => (res = data))
  return (
    <main className={individualPage}>
      <div className={qAContainer}>
        <QACardContainer qAData={res.contents[0]} />
        <PostForm mode={'reply'} />
      </div>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
    </main>
  )
}
