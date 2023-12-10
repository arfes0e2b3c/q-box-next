import { MicroCMSResponse } from '@/types'

export const fetchSlicePosts = async (offset: number) => {
  const res = await fetch(`/api/posts?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
