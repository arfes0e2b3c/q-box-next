import { useMutation } from '@tanstack/react-query'

export const useDeletePost = () =>
  useMutation(async (contentId: string) => {
    const res = await deletePost(contentId)
    return res
  })

const deletePost = async (contentId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentId }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
