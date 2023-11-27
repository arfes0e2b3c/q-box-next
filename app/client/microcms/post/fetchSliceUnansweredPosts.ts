import { MicroCMSResponse } from '@/types'

export const fetchSliceUnansweredPosts = async (offset: number) => {
  const res = await fetch(`/api/posts/unanswered?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
