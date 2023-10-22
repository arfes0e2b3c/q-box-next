import { MicroCMSQueries, MicroCMSResponse } from '@/types'
import { createClient } from 'microcms-js-sdk'
const client = createClient({
  serviceDomain: 'q-box',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_KEY || '',
})

export const fetchPosts = async ({
  queries,
}: {
  queries?: MicroCMSQueries
}): Promise<MicroCMSResponse> => {
  const res = await client.get({
    endpoint: 'q_box_posts',
    queries,
  })
  return res
}
