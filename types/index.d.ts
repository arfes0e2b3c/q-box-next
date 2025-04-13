export type PostMode = 'question' | 'reply'
export type AnswerState = 'answered' | 'requirement' | 'old' | 'noResult'
export interface MicroCMSTimes {
  createdAt: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}
export interface Reply extends MicroCMSTimes {
  id: string
  replySentence: string
  replyAnswer?: string
  isDeleted: boolean
  replyFor: {
    id: string
  }
}
export interface QA extends MicroCMSTimes {
  id: string
  question: string
  answer: string
  replyTweetId: string | undefined
  state: AnswerState
  replies: Reply[]
}
export interface MicroCMSResponse {
  contents: QA[]
  totalCount: number
  offset: number
  limit: number
}

export interface MicroCMSQueries {
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

export interface LinkInfo {
  start: number
  end: number
}

export type LinkInfoList = LinkInfo[]
