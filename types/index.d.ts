export type PostMode = 'question' | 'reply'
export type AnswerState = 'answered' | 'requirement' | 'old' | 'noResult'
export type MicroCMSTimes = {
  createdAt: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
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
export type QA = MicroCMSTimes & {
  id: string
  question: string
  answer: string
  replyTweetId: string
  state: AnswerState
  replies: Reply[]
}
export type MicroCMSResponse = {
  contents: QA[]
  totalCount: number
  offset: number
  limit: number
}

export type MicroCMSQueries = {
  draftKey?: string
  limit?: number
  offset?: number
  orders?: string
  fields?: string | string[]
  q?: string
  ids?: string | string[]
  filters?: string
  richEditorFormat?: 'html' | 'object'
}

export type LinkInfo = {
  start: number
  end: number
}

export type LinkInfoList = LinkInfo[]
