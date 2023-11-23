import { Reply } from '@/types'
import dayjs from 'dayjs'
import {
  replyContainer,
  createdAt,
  box,
  button,
  replySentence,
  answered,
  registerButton,
} from './replyCard.css'
import { useDeleteReply } from '@/hooks/useDeleteReply'
import { useReplyPageStore } from '@/store/replyPageStore'
import { usePostReply } from '@/hooks/usePostReply'
import { useMoveToAnswer } from '@/hooks/useMoveToAnswer'
import { LoadingButton } from '../LoadingButton'

export const ReplyCard = (props: { reply: Reply; replyTweetId: string; postId: string }) => {
  const reply = props.reply
  const replyTweetId = props.replyTweetId
  const postId = props.postId

  const deleteReply = useDeleteReply()
  const deleteButtonClickHandler = () => {
    if (confirm('質問を削除しますか？')) {
      deleteReply.mutate(reply.id, {
        onSuccess: () => {
          alert('質問を削除しました')
          refetch()
        },
        onError: (error) => alert(error),
      })
    }
  }

  const postReply = usePostReply()
  const postButtonClickHandler = () => {
    if (confirm('情報提供を公開しますか？')) {
      postReply.mutate(
        {
          postId,
          contentId: reply.id,
          replySentence: reply.replySentence,
          replyTweetId: replyTweetId,
        },
        {
          onSuccess: () => {
            alert('情報提供を公開しました')
            refetch()
          },
          onError: (error) => alert(error),
        }
      )
    }
  }
  const moveToAnswer = useMoveToAnswer()
  const moveButtonClickHandler = () => {
    if (confirm('このページから削除され、回答待ちの質問に新しく投稿されます。移動させますか？')) {
      moveToAnswer.mutate(
        { contentId: reply.id, question: reply.replySentence },
        {
          onSuccess: () => {
            alert('移動が完了しました')
            refetch()
          },
          onError: (error) => alert(error),
        }
      )
    }
  }
  const isLoading = deleteReply.isLoading || postReply.isLoading || moveToAnswer.isLoading

  const refetch = useReplyPageStore((state) => state.refetch)

  return (
    <div className={replyContainer} key={reply.id}>
      <p className={createdAt}>{dayjs(reply.createdAt).format('MM/DD HH:mm')}</p>
      <div className={box}>
        <LoadingButton isLoading={isLoading} onClick={deleteButtonClickHandler} style={button}>
          削除
        </LoadingButton>
        <p className={replySentence}>{reply.replySentence}</p>
        <LoadingButton isLoading={isLoading} onClick={moveButtonClickHandler} style={button}>
          質問に移動
        </LoadingButton>
      </div>
      <LoadingButton
        isLoading={isLoading}
        onClick={postButtonClickHandler}
        style={[registerButton, answered].join(' ')}
      >
        情報提供を公開
      </LoadingButton>
    </div>
  )
}
