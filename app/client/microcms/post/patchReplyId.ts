import { appBaseUrl } from '@/consts'

export const patchReplyId = async (replyFor: string) => {
  const postRes = await fetch(`${appBaseUrl}/api/replies/${replyFor}`)
  const currentReplyIds: string[] = (await postRes.json()).contents.map(
    (reply: { id: string }) => reply.id
  )

  const replyIdres = await fetch(`${appBaseUrl}/api/posts/reply_id/${replyFor}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ replyIds: currentReplyIds }),
  })
  const data: { id: string; error: string } = await replyIdres.json()
  if (replyIdres.status !== 200) throw new Error(data.error)
  return data
}
