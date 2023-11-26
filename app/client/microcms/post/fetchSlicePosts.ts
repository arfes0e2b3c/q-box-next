import { appBaseUrl } from '@/consts'
import { MicroCMSResponse } from '@/types'

export const fetchSlicePosts = async (offset: number) => {
  const res = await fetch(`${appBaseUrl}/api/posts?offset=${offset}`)
  const data: MicroCMSResponse = await res.json()
  return data
}
