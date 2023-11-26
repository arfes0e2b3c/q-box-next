import { appBaseUrl } from '@/consts'
import { MicroCMSResponse } from '@/types'

export const fetchSliceSearchPosts = async (offset: number, q: string) => {
  const res = await fetch(`${appBaseUrl}/api/search?offset=${offset}&q=${q}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
