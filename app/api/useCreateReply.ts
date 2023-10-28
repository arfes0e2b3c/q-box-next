import { useMutation } from '@tanstack/react-query'

export const useCreateReply = () =>
  useMutation(({ reply, replyFor }: { reply: string; replyFor: string }) =>
    createReply(reply, replyFor)
  )

const createReply = async (reply: string, replyFor: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reply, replyFor }),
  })
  const data: { id: number; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
