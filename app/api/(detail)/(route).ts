import { qA } from '@/types'
import { fetchPost } from '../microcms'
import { filterPublicReplies } from '@/lib'

export async function GET(contentId: string): Promise<qA> {
  const res: qA = await fetchPost({ contentId: contentId })

  return filterPublicReplies(res)
}
