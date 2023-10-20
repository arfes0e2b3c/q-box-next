import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link href='/'>ホームへ</Link>
      <h1>お手伝いサークル</h1>
      <input type='text' />
    </header>
  )
}
