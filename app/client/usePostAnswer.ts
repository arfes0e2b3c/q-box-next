import { useMutation } from '@tanstack/react-query'

export const usePostAnswer = () =>
  useMutation(async ({ answer, contentId }: { answer: string; contentId: string }) => {
    const patchAnswerRes = await patchAnswer(answer, contentId)
    if (patchAnswerRes.error) throw new Error(patchAnswerRes.error)
    const tweetId = await postTweetThread(answer)
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

const postTweetThread = async (answer: string) => {
  const tweets = splitTweet(answer)
  const tweetRes = await postTweet(tweets[0])
}

const postTweet = async (answer: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: answer + baseText }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
