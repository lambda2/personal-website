import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import styles from '../styles/Home.module.css'
import config from '../config.json'

const aProps = {
  target: "_blank",
  rel: "noopener noreferrer"
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property={`og:title`} content={config.title} />
        <meta property={`og:description`} content={config.description} />
        <meta property={`og:type`} content={`website`} />
        <meta name={`twitter:card`} content={`summary`} />
        <meta name={`twitter:creator`} content={config.author} />
        <meta name={`twitter:title`} content={config.title} />
        <meta name={`twitter:description`} content={config.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>

          <h1 className={styles.title}>
            👋 Hello,
          </h1>


          <p className={styles.description}>I'm André Aubin, a software and infrastructure developer, currently living in Lyon, France.</p>

          <p className={styles.description}>I spend a lot of time <a {...aProps} href="https://github.com/lambda2">building small projects</a> that can be useful (or not). If you have any questions, ideas or just want to talk, <a {...aProps} href="https://twitter.com/lambda_2">write me on Twitter</a>.</p>

          <p className={styles.description}>I'm currently automating farms at <a {...aProps} href="http://futuragaia.com/">Futura Gaïa</a>.</p>

          <p className={styles.description}>Before that, I was CTO at <a {...aProps} href="https://pandascore.co/">PandaScore</a> and developer at <a {...aProps} href="https://42.fr/">42</a>.</p>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default Home
