import { appBaseUrl } from '@/consts'

export const deletePost = async (contentId: string) => {
  const res = await fetch(`${appBaseUrl}/api/posts`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentId }),
  })
  if (res.status !== 200) throw new Error('削除に失敗しました')
}
