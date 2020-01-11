import React from "react"
import { rhythm } from "../utils/typography"
import { faKeybase, faGithub, faTwitter } from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

  const navStyle = {
    marginTop: rhythm(1.5),
    display: 'flex',
    justifyContent: 'space-between'
  }

  const aProps = {
    style: {
      margin: rhythm(.3),
      color: '#3c7891',
      textShadow: 'none',
      background: 'none',
      textDecoration: 'none',
    },
    target: "_blank",
    rel: "noopener noreferrer"
  }

  return (<footer style={navStyle}>
    <aside>© {new Date().getFullYear()}, andral.kiwi</aside>
    <nav>
      <a {...aProps} href="https://keybase.io/lambda2">
        <FontAwesomeIcon icon={faKeybase} />
      </a>
      <a {...aProps} href="https://github.com/lambda2">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a {...aProps} href="https://twitter.com/lambda_2">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </nav>
  </footer>)
}

export default Footer