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

  const aStyle = {
    margin: rhythm(.3),
    color: '#3c7891',
    textShadow: 'none',
    background: 'none',
    textDecoration: 'none',
  }

  return (<footer style={navStyle}>
    <aside>© {new Date().getFullYear()}, andral.kiwi</aside>
    <nav>
      <a style={aStyle} target="_blank" href="https://keybase.io/lambda2">
        <FontAwesomeIcon icon={faKeybase} />
      </a>
      <a style={aStyle} target="_blank" href="https://github.com/lambda2">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a style={aStyle} target="_blank" href="https://twitter.com/lambda_2">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </nav>
  </footer>)
}

export default Footer