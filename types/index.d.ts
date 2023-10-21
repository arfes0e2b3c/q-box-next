export type PostMode = 'question' | 'reply'
export type AnswerState = 'answered' | 'requirement' | 'old'
export type MicroCMSTimes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
export type Reply = MicroCMSTimes & {
  id: string
  replySentence: string
  replyAnswer?: string
  isDeleted: boolean
  replyFor: {
    id: string
  }
}
export type qA = MicroCMSTimes & {
  id: string
  question: string
  answer: string
  replyTweetId: string
  state: AnswerState
  replies: Reply[]
}
export type MicroCMSResponse = {
  contents: qA[]
  totalCount: number
  offset: number
  limit: number
}
