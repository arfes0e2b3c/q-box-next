import { SuspenseCard } from './suspenseCard'
import {
  createdAt,
  mainPost,
  suspenseCardContainer,
  suspenseSentence,
  suspenseSentenceContainer,
} from './index.css'

export const SuspenseCardContainer = () => {
  return (
    <section className={suspenseCardContainer}>
      <div className={mainPost}>
        <p className={createdAt}>　</p>
        <SuspenseCard />
        <div className={suspenseSentenceContainer}>
          <div className={suspenseSentence}></div>
          <div className={suspenseSentence}></div>
        </div>
      </div>
    </section>
  )
}
