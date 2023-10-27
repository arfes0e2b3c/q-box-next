import { qA } from '@/types'

export const filterPublicReplies = (post: qA) => {
  post.replies = post.replies.filter((reply) => {
    return reply.replyAnswer !== undefined && reply.isDeleted === false
  })
  return post
}
