import { appBaseUrl } from '@/consts'

export const patchTweetId = async (contentId: string, tweetId: string) => {
  const res = await fetch(`${appBaseUrl}/api/posts/tweet_id/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tweetId }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
}
