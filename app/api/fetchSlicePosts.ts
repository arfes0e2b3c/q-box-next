import { MicroCMSResponse } from '@/types'

export const fetchSlicePosts = async (offset: number) => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/posts?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
