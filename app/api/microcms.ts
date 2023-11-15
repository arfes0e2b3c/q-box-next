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

export const createPost = async (question: string) => {
  const res = await client.create({
    endpoint: 'q_box_posts',
    content: {
      question,
    },
  })
  return res
}

export const deletePost = async (contentId: string): Promise<void> => {
  await client.delete({
    endpoint: 'q_box_posts',
    contentId,
  })
}

export const patchPost = async (contentId: string, content: Partial<QA>) => {
  const res = await client.update({
    endpoint: 'q_box_posts',
    contentId,
    content,
  })
  return res
}

export const createReply = async (replySentence: string, replyFor: string) => {
  const res = await client.create({
    endpoint: 'q_box_replies',
    content: {
      replySentence,
      replyFor,
    },
  })
  return res
}
