import { splitTweet, addContinueText, addBaseText } from '@/lib/twitter'
import { useMutation } from '@tanstack/react-query'

export const usePostAnswer = () =>
  useMutation(async ({ answer, contentId }: { answer: string; contentId: string }) => {
    const patchAnswerRes = await patchAnswer(answer, contentId)
    if (patchAnswerRes.error) throw new Error(patchAnswerRes.error)
    const tweetId = await postTweetThread(answer, contentId)
    await patchTweetId(contentId, tweetId)
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

const postTweetThread = async (answer: string, contentId: string) => {
  let tweets = splitTweet(answer)
  tweets = addContinueText(tweets)
  tweets = addBaseText(tweets, contentId)

  try {
    const tweetReplyId: string = await postTweet(tweets[0])

    if (tweets.length > 1) {
      const replyId = await postTweetReplies(tweetReplyId, tweets.slice(1))
      return replyId
    } else {
      return tweetReplyId
    }
  } catch {
    throw new Error('ツイートに失敗しました')
  }
}

const postTweet = async (answer: string) => {
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

const postTweetReplies = async (firstReplyId: string, replies: string[]) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweet/reply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstReplyId, replies }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
  return data.id
}

const patchTweetId = async (contentId: string, tweetId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/tweet_id/${contentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tweetId }),
  })
  const data: { id: string; error: string } = await res.json()
  if (res.status !== 200) throw new Error(data.error)
}
