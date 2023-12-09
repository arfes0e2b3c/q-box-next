import { MicroCMSResponse } from '@/types'

export const fetchHasUnanseredPost = async (): Promise<boolean> => {
  const res = await fetch('/api/posts/unanswered?offset=0')
  const data: MicroCMSResponse = await res.json()
  return data.totalCount > 0
}
