import { filterPublicReplies } from '@/lib'
import { QA } from '@/types'
import { fetchPost } from '../../../models/microcms'
import { noResultQAData } from '@/consts'

export async function GET_CLIENT(contentId: string): Promise<QA> {
  try {
    const res = await fetchPost({
      contentId: contentId,
      queries: { filters: 'answer[exists]', fields: 'id,createdAt,question,answer,state,replies' },
    })
    return filterPublicReplies(res)
  } catch (e) {
    console.log(e)
    return noResultQAData
  }
}
