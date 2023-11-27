import { appBaseUrl } from '@/consts'

export const createPost = async (question: string) => {
  const res = await fetch(`${appBaseUrl}/api/posts`, {
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
