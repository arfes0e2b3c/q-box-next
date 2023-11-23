export const createPost = async (question: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  })
  const data: { id: number; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
