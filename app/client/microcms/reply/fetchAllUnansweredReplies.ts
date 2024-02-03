import { MicroCMSResponse } from '@/types'

export const fetchAllUnansweredReplies = async () => {
  const res = await fetch(`/api/replies/unanswered`, { next: { revalidate: 60 } })
  const data: MicroCMSResponse = await res.json()
  return data
}
