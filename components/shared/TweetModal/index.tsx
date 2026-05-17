'use client'
import {
  modal,
  modalContent,
  modalHeader,
  modalTitle,
  modalBody,
  modalFooter,
  footerText,
  closeButton,
  tweetText,
  copyButton,
  openXButton,
  footerButton,
  tweetItem,
  tweetActions,
} from './index.css'

interface TweetModalProps {
  isOpen: boolean
  onClose: () => void
  tweets: string[]
}

export const TweetModal = ({ isOpen, onClose, tweets }: TweetModalProps) => {
  const makeXIntentUrl = (text: string) =>
    `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .catch((err) => {
        console.error('クリップボードへのコピーに失敗しました:', err)
        alert('コピーに失敗しました')
      })
  }
  if (!isOpen) return null

  return (
    <div className={modal}>
      <div className={modalContent}>
        <div className={modalHeader}>
          <h2 className={modalTitle}>ツイート内容</h2>
          <button className={closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={modalBody}>
          {tweets.map((tweet, index) => (
            <div key={index} className={tweetItem}>
              <p className={tweetText}>{tweet}</p>
              <div className={tweetActions}>
                <a
                  className={openXButton}
                  href={makeXIntentUrl(tweet)}
                  target='_blank'
                  rel='noreferrer'
                >
                  Xで開く
                </a>
                <button className={copyButton} onClick={() => copyToClipboard(tweet)}>
                  コピー
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={modalFooter}>
          <p className={footerText}>各ツイートをコピーするか、Xで開いて投稿してください</p>
          <button className={footerButton} onClick={onClose}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  )
}
