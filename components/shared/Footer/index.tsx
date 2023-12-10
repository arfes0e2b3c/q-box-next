import Image from 'next/image'
import {
  footer,
  footerImageSection,
  footerRightsText,
  footerTextSection,
  footerTitle,
} from './index.css'

export const Footer = () => {
  return (
    <footer className={footer}>
      <a className={footerImageSection} href='https://twitter.com/PALDOW2022' target='_blank'>
        <Image src='/otecir-logo.jpeg' alt='otetsudai-circle' width={100} height={100} />
      </a>
      <div className={footerTextSection}>
        <h2 className={footerTitle}>お手伝いサークル</h2>
        <p className={footerRightsText}>©️otetsudai-circle all rights reserved.</p>
      </div>
    </footer>
  )
}
