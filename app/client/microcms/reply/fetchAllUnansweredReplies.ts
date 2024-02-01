import { MicroCMSResponse } from '@/types'

export const fetchAllUnansweredReplies = async () => {
  const res = await fetch(`/api/replies/unanswered`)
  const data: MicroCMSResponse = await res.json()
  return data
}
