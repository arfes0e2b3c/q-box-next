import { MicroCMSResponse } from '@/types'

export const fetchTwitterApiLogs = async () => {
  const res = await fetch(`/api/twitter_api_logs`)
  const data: MicroCMSResponse = await res.json()
  return data
}
