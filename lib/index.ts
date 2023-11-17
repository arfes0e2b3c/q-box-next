import { answered, requirement, old, noResult } from '@/components/shared/QACardContainer/index.css'
import { baseText, continueText, twitterMaxLength } from '@/consts'
import { AnswerState, MicroCMSResponse, QA } from '@/types'
import twitterText from 'twitter-text'

export const filterPublicReplies = (post: QA) => {
  post.replies = post.replies.filter((reply) => {
    return reply.replyAnswer !== undefined && reply.isDeleted === false
  })
  return post
}

export const exchangeStateToStyle = (state: string) => {
  switch (state) {
    case 'answered':
      return answered
    case 'requirement':
      return requirement
    case 'old':
      return old
    case 'noResult':
      return noResult
    default:
      return ''
  }
}

export const exchangeStateToUrl = (state: AnswerState) => {
  switch (state) {
    case 'answered':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/690434409f8a4b2f9e53fe9f8dd23102/answered-right.png'
    case 'requirement':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/c7e76a06b7434a1e93686f5ebf958ed2/requirement-right.png'
    case 'old':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/588cf35b643248f48322b2ea43cf55e5/old-right.png'
    case 'noResult':
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/b2c61a4fc9d747b7bb3da95d8b30886a/no-result-right.png'
    default:
      return 'https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/690434409f8a4b2f9e53fe9f8dd23102/answered-right.png'
  }
}

export const isRightAccessUser = (email: string, uid: string): boolean =>
  email === process.env.NEXT_PUBLIC_OTECIR_EMAIL && uid === process.env.NEXT_PUBLIC_OTECIR_USER_ID

export const filterPosts = (posts: MicroCMSResponse): MicroCMSResponse => {
  const filteredContents = posts.contents.map(filterReplies).filter(postHasReplies)
  return { ...posts, contents: filteredContents }
}

const filterReplies = (post: QA) => {
  const filteredReplies = post.replies.filter((reply) => !reply.isDeleted && !reply.replyAnswer)
  return { ...post, replies: filteredReplies }
}

const postHasReplies = (post: QA) => post.replies.length > 0

export const countTweetLength = (text: string): number => {
  let tmpCount = twitterText.getTweetLength(text)

  let loopCount = 1
  while (tmpCount > twitterMaxLength * loopCount) {
    tmpCount += twitterText.getTweetLength(continueText)
    loopCount++
  }

  return tmpCount
}

export const isDisplayedRed = (count: number): boolean => {
  while (count > twitterMaxLength * 2) count -= twitterMaxLength * 2
  return count > twitterMaxLength
}

export const displayCount = (count: number): number => {
  while (count > twitterMaxLength) count -= twitterMaxLength
  return count / 2
}

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
