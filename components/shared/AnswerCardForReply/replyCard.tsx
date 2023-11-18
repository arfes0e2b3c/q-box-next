import { baseFont } from '@/consts/fonts'
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
import { useDeleteReply } from '@/app/client/useDeleteReply'
import { useReplyPageStore } from '@/store/replyPageStore'
import { Oval } from 'react-loader-spinner'
import { usePostReply } from '@/app/client/usePostReply'
import { useMoveToAnswer } from '@/app/client/useMoveToAnswer'

export const ReplyCard = (props: { reply: Reply; replyTweetId: string; postId: string }) => {
  const reply = props.reply
  const replyTweetId = props.replyTweetId
  const postId = props.postId

  const deleteReply = useDeleteReply()
  const postReply = usePostReply()
  const moveToAnswer = useMoveToAnswer()
  const isLoading = deleteReply.isLoading

  const refetch = useReplyPageStore((state) => state.refetch)

  return (
    <div className={replyContainer} key={reply.id}>
      <p className={createdAt}>{dayjs(reply.createdAt).format('MM/DD HH:mm')}</p>
      <div className={box}>
        <button
          className={[button, baseFont.className].join(' ')}
          disabled={isLoading}
          onClick={() => {
            if (confirm('質問を削除しますか？')) {
              deleteReply.mutate(reply.id, {
                onSuccess: () => {
                  alert('質問を削除しました')
                  refetch()
                },
                onError: (error) => alert(error),
              })
            }
          }}
        >
          {isLoading ? (
            <Oval
              strokeWidth={'5'}
              height='25'
              width='25'
              ariaLabel='loading'
              color='white'
              secondaryColor='#333'
              wrapperStyle={{ cursor: 'not-allowed' }}
            />
          ) : (
            '削除'
          )}
        </button>
        <p className={replySentence}>{reply.replySentence}</p>
        <button
          className={[button, baseFont.className].join(' ')}
          disabled={isLoading}
          onClick={() => {
            if (
              confirm(
                'このページから削除され、回答待ちの質問に新しく投稿されます。移動させますか？'
              )
            ) {
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
          }}
        >
          {isLoading ? (
            <Oval
              strokeWidth={'5'}
              height='25'
              width='25'
              ariaLabel='loading'
              color='white'
              secondaryColor='#333'
              wrapperStyle={{ cursor: 'not-allowed' }}
            />
          ) : (
            '質問に移動'
          )}
        </button>
      </div>
      <button
        className={[registerButton, answered, baseFont.className].join(' ')}
        disabled={isLoading}
        onClick={() => {
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
        }}
      >
        {isLoading ? (
          <Oval
            strokeWidth={'5'}
            height='25'
            width='25'
            ariaLabel='loading'
            color='white'
            secondaryColor='#333'
            wrapperStyle={{ cursor: 'not-allowed' }}
          />
        ) : (
          '情報提供を公開'
        )}
      </button>
    </div>
  )
}
