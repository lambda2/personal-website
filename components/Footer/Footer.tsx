import React from 'react';
import { FaGithubAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from '../../styles/Home.module.css'
import config from "../../config.json"

const aProps = {
  target: "_blank",
  rel: "noopener noreferrer"
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <aside className={styles.aside}>
          {(new Date()).getUTCFullYear()}, André Aubin - <a {...aProps} href="https://creativecommons.org/publicdomain/zero/1.0/">No copyright</a>
        </aside>
        <aside className={styles.aside}>
          <ul>
            <li>
              <a {...aProps} href={`https://github.com/${config.social.github}`}>
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a {...aProps} href={`https://twitter.com/${config.social.twitter}`}>
                <FaTwitter />
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