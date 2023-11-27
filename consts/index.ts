import { QA } from '@/types'

export const appBaseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

export const noResultQAData: QA = {
  id: '0',
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
