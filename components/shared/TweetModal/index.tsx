'use client'
import { useEffect, useState } from 'react'
import {
  modal,
  modalContent,
  modalHeader,
  modalBody,
  modalFooter,
  closeButton,
  tweetText,
  copyButton,
  copiedButton,
  tweetItem,
} from './index.css'

interface TweetModalProps {
  isOpen: boolean
  onClose: () => void
  tweets: string[]
}

export const TweetModal = ({ isOpen, onClose, tweets }: TweetModalProps) => {
  // コピー状態を管理する配列
  const [copiedStatus, setCopiedStatus] = useState<boolean[]>([])

  // モーダルが開かれたときにコピー状態をリセット
  useEffect(() => {
    if (isOpen) {
      setCopiedStatus(new Array(tweets.length).fill(false))
    }
  }, [isOpen, tweets.length])

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // コピー成功時に状態を更新
        const newStatus = [...copiedStatus]
        newStatus[index] = true
        setCopiedStatus(newStatus)
      })
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
          <h2>ツイート内容</h2>
          <button className={closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={modalBody}>
          {tweets.map((tweet, index) => (
            <div key={index} className={tweetItem}>
              <p className={tweetText}>{tweet}</p>
              <button
                className={copiedStatus[index] ? copiedButton : copyButton}
                onClick={() => copyToClipboard(tweet, index)}
              >
                {copiedStatus[index] ? 'コピー済み' : 'コピー'}
              </button>
            </div>
          ))}
        </div>
        <div className={modalFooter}>
          <p>各ツイートをコピーして手動で投稿してください</p>
          <button onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  )
}
