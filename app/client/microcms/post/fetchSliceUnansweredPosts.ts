import { appBaseUrl } from '@/consts'
import { MicroCMSResponse } from '@/types'

export const fetchSliceUnansweredPosts = async (offset: number) => {
  const res = await fetch(`${appBaseUrl}/api/posts/unanswered?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
