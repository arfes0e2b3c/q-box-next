import { twitterMaxLength, continueText, tweetBaseText } from '@/consts'
import { countTweetLength } from '.'
import { LinkInfoList } from '@/types'

const calculateMaxLength = (tweets: string[], continueTextLength: number): number =>
  twitterMaxLength - (tweets[0] == null ? countTweetLength(tweetBaseText) : 0) - continueTextLength

export const splitTweet = (text: string): string[] => {
  let currentTweet = ''
  let tweets = []
  const links = findLinks(text)
  const continueTextLength =
    countTweetLength(text) > twitterMaxLength ? countTweetLength(continueText) : 0

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i)
    let testTweet = currentTweet + char
    let MAX_LENGTH = calculateMaxLength(tweets, continueTextLength)

    let isInsideLink = links.some((link) => i >= link.start && i < link.end)
    let willSplitLink = links.some(
      (link) => i >= link.start && i < link.end && countTweetLength(testTweet) > MAX_LENGTH
    )

    if (countTweetLength(testTweet) <= MAX_LENGTH && !willSplitLink) {
      currentTweet += char
    } else {
      if (isInsideLink && willSplitLink) {
        let link = links.find((link) => i >= link.start && i < link.end) as {
          start: number
          end: number
        }
        currentTweet += text.slice(i, link.end)
        i = link.end - 1
      }
      tweets.push(currentTweet)
      currentTweet = char
    }
  }

  if (currentTweet) {
    tweets.push(currentTweet)
  }

  return tweets
}

const findLinks = (text: string): LinkInfoList => {
  const urlRegex = /https?:\/\/[^\s]+/g
  let links = []
  let match

  while ((match = urlRegex.exec(text)) !== null) {
    links.push({ start: match.index, end: match.index + match[0].length })
  }

  return links
}

export const addBaseText = (tweets: string[], contentId: string): string[] => {
  const detailPageLink = tweetBaseText + '/' + contentId
  return tweets.map((tweet, index) => {
    if (index === 0) return tweet + detailPageLink
    else return tweet
  })
}
export const addContinueText = (tweets: string[]): string[] => {
  if (tweets.length === 1) return tweets
  return tweets.map((tweet, index) => {
    if (!isLastTweet(index, tweets.length)) return tweet + continueText
    else return tweet
  })
}

const isLastTweet = (index: number, tweetLength: number): boolean => index === tweetLength - 1
