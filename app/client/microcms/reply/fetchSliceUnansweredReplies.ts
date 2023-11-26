import { appBaseUrl } from '@/consts'
import { MicroCMSResponse } from '@/types'

export const fetchSliceUnansweredReplies = async (offset: number) => {
  const res = await fetch(`${appBaseUrl}/api/replies/unanswered?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
