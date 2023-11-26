import { appBaseUrl } from '@/consts'

export const createReply = async (reply: string, replyFor: string) => {
  const res = await fetch(`${appBaseUrl}/api/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reply, replyFor }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
