import { QA } from '@/types'

export const filterPublicReplies = (post: QA) => {
  post.replies = post.replies.filter((reply) => {
    return reply.replyAnswer !== undefined && reply.isDeleted === false
  })
  return post
}
