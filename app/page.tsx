import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {

  const aProps = {
    target: "_blank",
    rel: "noopener noreferrer"
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>

          <h1 className={styles.title}>
            👋 Hello,
          </h1>


          <p className={styles.description}>I'm André Aubin, a software and infrastructure developer, currently living in Lyon, France.</p>

          <p className={styles.description}>I spend a lot of time <a {...aProps} href="https://github.com/lambda2">building small projects</a> that can be useful (or not). If you have any questions, ideas or just want to talk, <a {...aProps} href="https://bsky.app/profile/andreawbin.bsky.social">write me on Bluesky</a>.</p>

          <p className={styles.description}>I'm currently automating farms at <a {...aProps} href="http://futuragaia.com/">Futura Gaïa</a>.</p>

          <p className={styles.description}>Before that, I was CTO at <a {...aProps} href="https://pandascore.co/">PandaScore</a> and developer at <a {...aProps} href="https://42.fr/">42</a>.</p>
        </section>

      </main>

      <Footer />
    </div>

  );
}
