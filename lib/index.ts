import { answered, requirement, old, noResult } from '@/components/shared/QACardContainer/index.css'
import { AnswerState, MicroCMSResponse, QA } from '@/types'

export const filterPublicReplies = (post: QA) => {
  post.replies = post.replies.filter((reply) => {
    return reply.replyAnswer !== undefined && reply.isDeleted === false
  })
  return post
}

export const exchangeStateToStyle = (state: string) => {
  switch (state) {
    case 'answered':
      return answered
    case 'requirement':
      return requirement
    case 'old':
      return old
    case 'noResult':
      return noResult
    default:
      return ''
  }
}

export const exchangeStateToUrl = (state: AnswerState) => {
  switch (state) {
    case 'answered':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/690434409f8a4b2f9e53fe9f8dd23102/answered-right.png'
    case 'requirement':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/c7e76a06b7434a1e93686f5ebf958ed2/requirement-right.png'
    case 'old':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/588cf35b643248f48322b2ea43cf55e5/old-right.png'
    case 'noResult':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/b2c61a4fc9d747b7bb3da95d8b30886a/no-result-right.png'
    default:
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/690434409f8a4b2f9e53fe9f8dd23102/answered-right.png'
  }
}

export const isRightAccessUser = (email: string, uid: string): boolean =>
  email === process.env.NEXT_PUBLIC_OTECIR_EMAIL && uid === process.env.NEXT_PUBLIC_OTECIR_USER_ID

export const filterPosts = (posts: MicroCMSResponse): MicroCMSResponse => {
  const filteredContents = posts.contents.map(filterReplies).filter(postHasReplies)
  return { ...posts, contents: filteredContents }
}

const filterReplies = (post: QA) => {
  const filteredReplies = post.replies.filter((reply) => !reply.isDeleted && !reply.replyAnswer)
  return { ...post, replies: filteredReplies }
}

const postHasReplies = (post: QA) => post.replies.length > 0
