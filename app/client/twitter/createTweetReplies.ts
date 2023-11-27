import { appBaseUrl } from '@/consts'

export const createTweetReplies = async (firstReplyId: string, replies: string[]) => {
  const res = await fetch(`${appBaseUrl}/api/tweet/reply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstReplyId, replies }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data.id
}
