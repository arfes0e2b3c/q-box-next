import { QA } from '@/types'
import { fetchPost } from '../microcms'
import { filterPublicReplies } from '@/lib'

export async function GET(contentId: string): Promise<QA> {
  const res: QA = await fetchPost({ contentId: contentId })

  return filterPublicReplies(res)
}
