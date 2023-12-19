import { QA } from '@/types'

export const appBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

export const noResultQAData: QA = {
  id: '4.png',
  createdAt: '1111-11-10T15:00:00.000Z',
  question: '',
  answer: '',
  replyTweetId: '',
  state: 'noResult',
  replies: [],
}

export const notFoundQAData: QA = {
  id: 'noResult.png',
  createdAt: '1111-11-10T15:00:00.000Z',
  question: '',
  answer: '',
  replyTweetId: '',
  state: 'noResult',
  replies: [],
}

export const twitterMaxLength = 280
export const tweetBaseText = `\n#お手伝いサークル ${appBaseUrl}`
export const replyBaseText = `【提供していただいた情報】\n\n`
export const continueText = '(続く)'

export const sliceLimitCount = 10
