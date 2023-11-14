import { useMutation } from '@tanstack/react-query'

export const useDeletePost = () =>
  useMutation(async (contentId: string) => {
    await deletePost(contentId)
  })

const deletePost = async (contentId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentId }),
  })
  if (res.status !== 200) throw new Error('削除に失敗しました')
}
