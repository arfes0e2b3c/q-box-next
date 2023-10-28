export const createReply = async ({
  replyFor,
  replySentence,
}: {
  replyFor: string
  replySentence: string
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      replyFor: replyFor,
      replySentence: replySentence,
    }),
  })

  const data: { id: number } = await res.json()
  return data
}
