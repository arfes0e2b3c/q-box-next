import { QA } from '@/types'
import { GET } from '../../../api/(all_ids)/route'

export const fetchAllPostIds = async () => {
  const res = await GET()
  const { data }: { data: QA[] } = await res.json()
  return data
}
