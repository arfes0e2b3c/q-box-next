export const postTweet = async (answer: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: answer }),
  })
  const tweetReplyId: string = await res.json()
  if (res.status !== 200) throw new Error('ツイートに失敗しました')
  return tweetReplyId
}
