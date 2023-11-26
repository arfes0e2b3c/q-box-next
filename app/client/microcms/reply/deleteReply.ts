import { appBaseUrl } from '@/consts'

export const deleteReply = async (contentId: string) => {
  const res = await fetch(`${appBaseUrl}/api/replies/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (res.status !== 200) throw new Error('削除に失敗しました')
}
