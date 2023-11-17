import { TwitterApi } from 'twitter-api-v2'

const twitterClient = new TwitterApi({
  appKey: process.env.NEXT_PUBLIC_TWITTER_APP_KEY || '',
  appSecret: process.env.NEXT_PUBLIC_TWITTER_APP_SECRET || '',
  accessToken: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN || '',
  accessSecret: process.env.NEXT_PUBLIC_TWITTER_ACCESS_SECRET || '',
})

export const tweet = async (text: string) => await twitterClient.v2.tweet(text)
