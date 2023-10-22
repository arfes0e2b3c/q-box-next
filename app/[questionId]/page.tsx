import { PostForm } from '@/components/shared/PostBox'
import { MicroCMSResponse, qA } from '@/types'
import { QACardContainer } from '@/components/shared/QACardContainer'
import { formContainer, individualPage, qAContainer } from './page.css'

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/all_ids', {
    headers: { 'Content-Type': 'application/json' },
  })
  const { data }: { data: qA[] } = await res.json()

  const paths = await data.map((content) => {
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
