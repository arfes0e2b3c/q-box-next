import { useMutation } from '@tanstack/react-query'
import { addContinueText } from '@/lib/twitter'
import { LinkInfoList } from '@/types'
import { twitterMaxLength, continueText, replyBaseText } from '@/consts'
import { countTweetLength } from '@/lib'
import { patchTweetId } from './patchTweetId'
import { postTweetReplies } from './postTweetReplies'
import { postReply } from './postReply'
import { patchReplyAnswer } from './patchReplyAnswer'

export const usePostReply = () =>
  useMutation(
    async ({
      postId,
      contentId,
      replySentence,
      replyTweetId,
    }: {
      postId: string
      contentId: string
      replySentence: string
      replyTweetId: string
    }) => {
      await patchReplyAnswer(contentId)
      const tweetId = await postReplyThread(replyTweetId, replySentence)
      await patchTweetId(postId, tweetId)
    }
  )

export const postReplyThread = async (
  replyTweetId: string,
  replySentence: string
): Promise<string> => {
  let replies = splitReply(replySentence)
  replies = addContinueText(replies)
  try {
    let replyId: string = await postReply(replies[0], replyTweetId)

    if (replies.length > 1) {
      replyId = await postTweetReplies(replyId, replies.slice(1))
    }
    return replyId
  } catch {
    throw new Error('公開に失敗しました')
  }
}

const splitReply = (replySentence: string): string[] => {
  let currentReply = ''
  let replies = []
  const links = findLinks(replySentence)
  const continueTextLength =
    countTweetLength(replySentence) > twitterMaxLength ? countTweetLength(continueText) : 0
  for (let i = 0; i < replySentence.length; i++) {
    let char = replySentence.charAt(i)
    let testReply = currentReply + char
    let MAX_LENGTH = calculateMaxLength(replies, continueTextLength)

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

const calculateMaxLength = (tweets: string[], continueTextLength: number): number =>
  twitterMaxLength - (tweets[0] == null ? countTweetLength(replyBaseText) : 0) - continueTextLength

const findLinks = (text: string): LinkInfoList => {
  const urlRegex = /https?:\/\/[^\s]+/g
  let links = []
  let match

  while ((match = urlRegex.exec(text)) !== null) {
    links.push({ start: match.index, end: match.index + match[0].length })
  }

  return links
}
