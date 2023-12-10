export const patchReplyAnswer = async (contentId: string) => {
  const res = await fetch(`/api/replies/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: { replyAnswer: 'replyAnswer' } }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
