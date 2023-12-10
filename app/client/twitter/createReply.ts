import { appBaseUrl, replyBaseText } from '@/consts'

export const createReply = async (replySentence: string, replyTweetId: string) => {
  const res = await fetch(`/api/tweet/reply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstReplyId: replyTweetId, replies: [replyBaseText + replySentence] }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data.id
}
