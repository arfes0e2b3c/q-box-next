import { MicroCMSQueries, MicroCMSResponse, QA, Reply } from '@/types'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN || '',
  apiKey: process.env.MICROCMS_KEY || '',
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

export const fetchReplies = async (queries?: MicroCMSQueries) => {
  const res = await client.get({
    endpoint: 'q_box_replies',
    queries,
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

export const patchReply = async (contentId: string, content: Partial<Reply>) => {
  const res = await client.update({
    endpoint: 'q_box_replies',
    contentId,
    content,
  })
  return res
}

export const createTwitterApiLog = async (type: string, twitterId: string) => {
  const res = await client.create({
    endpoint: 'q_box_twitter_api_logs',
    content: {
      type,
      twitterId,
    },
  })
  return res
}

export const fetchTwitterApiLogs = async (queries?: MicroCMSQueries) => {
  const res = await client.get({
    endpoint: 'q_box_twitter_api_logs',
    queries,
  })
  return res
}
