import './globals.css'
import "@fontsource/modak";
import "@fontsource/dongle";
import styles from './page.module.scss'

export const metadata = {
  title: 'POOGY NFT',
  description: 'Get your NFTs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${styles['top-bg']}`}>
        {children}
      </body>
    </html>
  )
}
