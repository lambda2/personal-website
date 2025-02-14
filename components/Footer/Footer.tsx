import React from 'react';
import { FaGithubAlt, FaBluesky, FaLinkedin, FaCreativeCommonsZero } from 'react-icons/fa6';
import styles from './Footer.module.css'
import config from "@/config.json"

const aProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  style: { display: 'flex', columnGap: '0.3rem' }
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <aside className={styles.aside}>
          {(new Date()).getUTCFullYear()}, André Aubin - 
          <a {...aProps} href="https://creativecommons.org/publicdomain/zero/1.0/"><FaCreativeCommonsZero />{' '}No copyright</a>
        </aside>
        <aside className={styles.aside}>
          <ul>
            <li>
              <a {...aProps} href={`https://github.com/${config.social.github}`}>
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a {...aProps} href={`https://bsky.app/profile/${config.social.bluesky}`}>
                <FaBluesky />
              </a>
            </li>
            <li>
              <a {...aProps} href={`https://www.linkedin.com/in/${config.social.linkedin}/`}>
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </aside>
        </section>
      </footer>
  )
}