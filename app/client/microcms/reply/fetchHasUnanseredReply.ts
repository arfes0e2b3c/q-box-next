import { MicroCMSResponse } from '@/types'

export const fetchHasUnanseredReply = async (): Promise<boolean> => {
  const res = await fetch('/api/replies/unanswered')
  const data: MicroCMSResponse = await res.json()
  return data.totalCount > 0
}
