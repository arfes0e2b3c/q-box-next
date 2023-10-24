import { MicroCMSResponse } from '@/types'

export const fetchSlicePosts = async (offset: number) => {
  const res = await fetch(`http://localhost:3000/api/posts?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
