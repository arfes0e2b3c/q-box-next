export const createTwitterApiLog = async (type: string, twitterId: string) => {
  const res = await fetch(`/api/twitter_api_logs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ twitterId, type }),
  })
  const data: { id: number; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data
}
