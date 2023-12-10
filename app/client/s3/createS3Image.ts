import { AnswerState } from '@/types'

export const createS3Image = async (contentId: string, question: string, state: AnswerState) => {
  const res = await fetch(`/api/s3`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentId, question, state }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data.id
}
