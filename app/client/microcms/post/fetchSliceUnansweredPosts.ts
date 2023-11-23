import { MicroCMSResponse } from '@/types'

export const fetchSliceUnansweredPosts = async (offset: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/unanswered?offset=${offset}`
  )
  const data: MicroCMSResponse = await res.json()
  return data
}
