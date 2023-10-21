import { PostForm } from '@/components/shared/PostBox'
import { QACardContainer } from '@/components/shared/QACardContainer'
import { mockQAResponse } from '@/consts'
import { MicroCMSResponse, qA } from '@/types'
import {
  formContainer,
  mainContainer,
  qAListContainer,
  qAListItem,
  qAListTitle,
  topPage,
} from './page.css'

export default function Home() {
  const qAData: MicroCMSResponse = mockQAResponse

  return (
    <main className={topPage}>
      <div className={formContainer}>
        <PostForm mode={'question'} />
      </div>
      <div className={mainContainer}>
        <ul className={qAListContainer}>
          <h2 className={qAListTitle}>最新の質問</h2>
          {qAData.contents.map((qA: qA) => (
            <li className={qAListItem} key={qA.id}>
              <QACardContainer qAData={qA} isLink />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
