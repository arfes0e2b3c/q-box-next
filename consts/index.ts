import { QA } from '@/types'

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
export const tweetBaseText = `\n#お手伝いサークル ${
  process.env.NEXT_PUBLIC_BASE_URL === 'http://localhost:3000'
    ? 'https://q-box-next.vercel.app'
    : process.env.NEXT_PUBLIC_BASE_URL
}`
export const replyBaseText = `【提供していただいた情報】\n\n`
export const continueText = '(続く)'
