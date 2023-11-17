import { answered, requirement, old, noResult } from '@/components/shared/QACardContainer/index.css'
import { continueText, twitterMaxLength } from '@/consts'
import { AnswerState, MicroCMSResponse, QA } from '@/types'
import twitterText from 'twitter-text'

export const filterPublicReplies = (post: QA): QA => {
  post.replies = post.replies.filter((reply) => {
    return reply.replyAnswer !== undefined && reply.isDeleted === false
  })
  return post
}

export const exchangeStateToStyle = (state: string): string => {
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
      return answered
  }
}

export const exchangeStateToUrl = (state: AnswerState): string => {
  const baseUrl = 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31'
  let path: string
  switch (state) {
    case 'answered':
      path = '/690434409f8a4b2f9e53fe9f8dd23102/answered-right.png'
    case 'requirement':
      path = '/c7e76a06b7434a1e93686f5ebf958ed2/requirement-right.png'
    case 'old':
      path = '/588cf35b643248f48322b2ea43cf55e5/old-right.png'
    case 'noResult':
      path = '/b2c61a4fc9d747b7bb3da95d8b30886a/no-result-right.png'
    default:
      path = '/690434409f8a4b2f9e53fe9f8dd23102/answered-right.png'
  }
  return baseUrl + path
}

export const filterPosts = (posts: MicroCMSResponse): MicroCMSResponse => {
  const filteredContents = posts.contents.map(filterReplies).filter(postHasReplies)
  return { ...posts, contents: filteredContents }
}

const filterReplies = (post: QA): QA => {
  const filteredReplies = post.replies.filter((reply) => !reply.isDeleted && !reply.replyAnswer)
  return { ...post, replies: filteredReplies }
}

const postHasReplies = (post: QA): boolean => post.replies.length > 0

export const countTweetLength = (text: string): number => {
  let tmpCount = twitterText.getTweetLength(text)

  let loopCount = 1
  while (tmpCount > twitterMaxLength * loopCount) {
    tmpCount += twitterText.getTweetLength(continueText)
    loopCount++
  }

  return tmpCount
}

export const isDisplayedRed = (count: number): boolean => {
  while (count > twitterMaxLength * 2) count -= twitterMaxLength * 2
  return count > twitterMaxLength
}

export const displayCount = (count: number): number => {
  while (count > twitterMaxLength) count -= twitterMaxLength
  return count / 2
}
