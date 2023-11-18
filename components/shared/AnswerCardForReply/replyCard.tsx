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

export const ReplyCard = (props: { reply: Reply }) => {
  const reply = props.reply

  const deleteReply = useDeleteReply()
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
        <button className={[button, baseFont.className].join(' ')}>質問へ移動</button>
      </div>
      <button className={[registerButton, answered, baseFont.className].join(' ')}>
        情報提供を公開
      </button>
    </div>
  )
}
