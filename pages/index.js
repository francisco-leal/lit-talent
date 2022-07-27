import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talent Protocol + Lit</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.talentprotocol.com">Talent Protocol!</a>
        </h1>

        <p className={styles.description}>
          This is a very secretive demo, so all major content is locked behind an NFT
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://talentprotocol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love by Talent Protocol
        </a>
      </footer>
    </div>
  )
}
