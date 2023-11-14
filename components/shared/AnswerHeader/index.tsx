import Link from 'next/link'
import { appTitle, appTitleContainer, header, linkToHome, noBorder } from './index.css'

export const AnswerHeader = (props: { path: string }) => {
  return (
    <header className={header}>
      <Link className={linkToHome} href='/'>
        最新の質問へ
      </Link>
      <div className={appTitleContainer}>
        <h1 className={appTitle}>お手伝いサークル</h1>
      </div>
      <Link
        className={[linkToHome, noBorder].join(' ')}
        href={props.path === '/answer' ? '/answer/reply' : '/answer'}
      >
        {props.path === '/answer' ? '回答待ちの返信へ' : '回答待ちの質問へ'}
      </Link>
    </header>
  )
}
