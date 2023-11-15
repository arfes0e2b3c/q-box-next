import { useMutation } from '@tanstack/react-query'

export const usePostAnswer = () =>
  useMutation(async ({ answer, contentId }: { answer: string; contentId: string }) => {
    const patchAnswerRes = await patchAnswer(answer, contentId)
    if (patchAnswerRes.error) throw new Error(patchAnswerRes.error)
  })

const patchAnswer = async (answer: string, contentId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/answer/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
