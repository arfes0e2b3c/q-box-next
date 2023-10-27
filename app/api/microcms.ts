import { MicroCMSQueries, MicroCMSResponse, QA } from '@/types'
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

export const fetchPost = async ({
  contentId,
  queries,
}: {
  contentId: string
  queries?: MicroCMSQueries
}): Promise<QA> => {
  const res = await client.get({
    endpoint: 'q_box_posts',
    contentId,
    queries,
  })
  return res
}
