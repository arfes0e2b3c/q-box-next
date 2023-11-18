import { useMutation } from '@tanstack/react-query'

export const useDeleteReply = () =>
  useMutation(async (contentId: string) => await deleteReply(contentId))

export const deleteReply = async (contentId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/replies/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (res.status !== 200) throw new Error('削除に失敗しました')
}
