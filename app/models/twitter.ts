import { TwitterApi } from 'twitter-api-v2'

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY || '',
  appSecret: process.env.TWITTER_APP_SECRET || '',
  accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
  accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
})

export const postTweet = async (text: string) => {
  const res = await twitterClient.v2.tweet(text)
  return res.data.id
}

export const postReply = async (text: string, replyTweetId: string): Promise<string> => {
  const res = await twitterClient.v2.tweet(text, {
    reply: {
      in_reply_to_tweet_id: replyTweetId,
    },
  })
  return res.data.id
}
