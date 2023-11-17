import { twitterMaxLength, continueText, baseText } from '@/consts'
import { countTweetLength } from '.'

export const splitTweet = (text: string) => {
  let currentTweet = ''
  let tweets = []
  const links = findLinks(text)

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i)
    let testTweet = currentTweet + char

    const continueTextLength =
      countTweetLength(text) > twitterMaxLength ? countTweetLength(continueText) : 0
    const MAX_LENGTH =
      twitterMaxLength - (tweets[0] == null ? countTweetLength(baseText) : 0) - continueTextLength

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

const findLinks = (text: string) => {
  const urlRegex = /https?:\/\/[^\s]+/g
  let links = []
  let match

  while ((match = urlRegex.exec(text)) !== null) {
    links.push({ start: match.index, end: match.index + match[0].length })
  }

  return links
}

export const addBaseText = (tweets: string[], contentId: string) => {
  const detailPageLink = baseText + '/' + contentId
  return tweets.map((tweet, index) => {
    if (index === 0) return tweet + detailPageLink
    else return tweet
  })
}
export const addContinueText = (tweets: string[]) => {
  if (tweets.length === 1) return tweets
  return tweets.map((tweet, index) => {
    if (!isLastTweet(index, tweets.length)) return tweet + continueText
    else return tweet
  })
}

const isLastTweet = (index: number, tweetLength: number) => index === tweetLength - 1
