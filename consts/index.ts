import { QA } from '@/types'

export const appBaseUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
    ? process.env.NEXT_PUBLIC_PREVIEW_URL || ''
    : process.env.NEXT_PUBLIC_PRODUCTION_URL || ''

export const noResultQAData: QA = {
  id: '4.png',
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
