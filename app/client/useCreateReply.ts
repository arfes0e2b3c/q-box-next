import { useMutation } from '@tanstack/react-query'

export const useCreateReply = () =>
  useMutation(async ({ reply, replyFor }: { reply: string; replyFor: string }) => {
    const createReplyRes = await createReply(reply, replyFor)
    const patchReplyIdRes = await patchReplyId(replyFor, createReplyRes.id)
    return patchReplyIdRes
  })

const createReply = async (reply: string, replyFor: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/replies`, {
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

const patchReplyId = async (replyFor: string, replyId: string) => {
  const postRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/detail/${replyFor}`)
  const currentReplyIds: string[] = (await postRes.json()).replies.map(
    (reply: { id: string }) => reply.id
  )

  const replyIdres = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/reply_id/${replyFor}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ replyIds: [...currentReplyIds, replyId] }),
    }
  )
  const data: { id: string; error: string } = await replyIdres.json()
  if (replyIdres.status !== 200) throw new Error(data.error)
  return data
}
