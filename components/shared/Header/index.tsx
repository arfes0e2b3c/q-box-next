import Link from 'next/link'
import { SearchSection } from './searchSection'
import { appTitle, appTitleContainer, header, linkToHome } from './index.css'

export const Header = () => {
  return (
    <header className={header}>
      <Link className={linkToHome} href='/'>
        ホームへ
      </Link>
      <div className={appTitleContainer}>
        <h1 className={appTitle}>お手伝いサークル</h1>
      </div>
      <SearchSection />
    </header>
  )
}
