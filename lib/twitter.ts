import { twitterMaxLength, continueText, tweetBaseText, replyBaseText } from '@/consts'
import { countTweetLength } from '.'
import { LinkInfoList } from '@/types'

const calculateMaxLength = (
  tweets: string[],
  continueTextLength: number,
  baseText: string
): number =>
  twitterMaxLength - (tweets[0] == null ? countTweetLength(baseText) : 0) - continueTextLength

export const splitTweet = (text: string): string[] => {
  let currentTweet = ''
  let tweets = []
  const links = findLinks(text)
  const continueTextLength =
    countTweetLength(text) > twitterMaxLength ? countTweetLength(continueText) : 0

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i)
    let testTweet = currentTweet + char
    let MAX_LENGTH = calculateMaxLength(tweets, continueTextLength, tweetBaseText)

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

export const makeTweetText = (answer: string, contentId: string): string[] => {
  let tweets = splitTweet(answer)
  tweets = addContinueText(tweets)
  tweets = addBaseText(tweets, contentId)
  return tweets
}

export const makeReplyText = (replySentence: string): string[] => {
  let replies = splitReply(replySentence)
  replies = addContinueText(replies)
  replies = addBaseTextToReply(replies)
  return replies
}

export const splitReply = (replySentence: string): string[] => {
  let currentReply = ''
  let replies = []
  const links = findLinks(replySentence)
  const continueTextLength =
    countTweetLength(replySentence) > twitterMaxLength ? countTweetLength(continueText) : 0
  for (let i = 0; i < replySentence.length; i++) {
    let char = replySentence.charAt(i)
    let testReply = currentReply + char
    let MAX_LENGTH = calculateMaxLength(replies, continueTextLength, replyBaseText)

    let isInsideLink = links.some((link) => i >= link.start && i < link.end)
    let willSplitLink = links.some(
      (link) => i >= link.start && i < link.end && countTweetLength(testReply) > MAX_LENGTH
    )

    if (countTweetLength(testReply) <= MAX_LENGTH && !willSplitLink) {
      currentReply += char
    } else {
      if (isInsideLink && willSplitLink) {
        let link = links.find((link) => i >= link.start && i < link.end) as {
          start: number
          end: number
        }
        currentReply += replySentence.slice(i, link.end)
        i = link.end - 1
      }
      replies.push(currentReply)
      currentReply = char
    }
  }

  if (currentReply) {
    replies.push(currentReply)
  }

  return replies
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

export const addBaseTextToReply = (replies: string[]): string[] => {
  return replies.map((reply, index) => {
    if (index === 0) return replyBaseText + reply
    return reply
  })
}

const isLastTweet = (index: number, tweetLength: number): boolean => index === tweetLength - 1
