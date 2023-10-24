import { qA } from '@/types'

export const fetchAllPostIds = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all_ids`)
  const { data }: { data: qA[] } = await res.json()
  return data
}
