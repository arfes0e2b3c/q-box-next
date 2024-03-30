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
export const replyBaseText = `【お寄せいただいた情報】\n`
export const continueText = '(続く)'

export const sliceLimitCount = 10

export const imgFontSettings = [
  {
    fontSize: 44,
    limitCount: 7,
    lineMaxCount: 22,
  },
  {
    fontSize: 40,
    limitCount: 8,
    lineMaxCount: 25,
  },
  {
    fontSize: 36,
    limitCount: 9,
    lineMaxCount: 27,
  },
  {
    fontSize: 32,
    limitCount: 10,
    lineMaxCount: 30,
  },
  {
    fontSize: 28,
    limitCount: 11,
    lineMaxCount: 35,
  },
]
