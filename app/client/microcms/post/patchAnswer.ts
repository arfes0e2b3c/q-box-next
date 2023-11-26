import { appBaseUrl } from '@/consts'
import { AnswerState } from '@/types'

export const patchAnswer = async (answer: string, contentId: string, state: AnswerState) => {
  const res = await fetch(`${appBaseUrl}/api/posts/answer/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer, state }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
