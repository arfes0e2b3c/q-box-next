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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/otecir-logo.jpeg' alt='otetsudai-circle' />
      </a>
      <div className={footerTextSection}>
        <h2 className={footerTitle}>お手伝いサークル</h2>
        <p className={footerRightsText}>©️otetsudai-circle all rights reserved.</p>
      </div>
    </footer>
  )
}
