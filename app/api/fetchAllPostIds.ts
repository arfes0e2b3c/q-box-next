import { qA } from '@/types'

export const fetchAllPostIds = async () => {
  const res = await fetch('http://localhost:3000/api/all_ids')
  const { data }: { data: qA[] } = await res.json()
  return data
}
