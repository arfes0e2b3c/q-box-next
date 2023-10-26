import { MicroCMSResponse } from '@/types'

export const fetchSliceSearchPosts = async (offset: number, q: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?offset=${offset}&q=${q}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
