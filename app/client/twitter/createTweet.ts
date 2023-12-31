export const createTweet = async (answer: string) => {
  const res = await fetch(`/api/tweet`, {
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
