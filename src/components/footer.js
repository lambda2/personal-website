import React from "react"
import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { injectIntl } from "gatsby-plugin-intl"
import { faKeybase, faGithub, faTwitter } from './icons'

const Footer = ({ intl }) => {

  const navStyle = {
    marginTop: rhythm(2),
    display: 'flex',
    justifyContent: 'space-between'
  }

  const aProps = {
    style: {
      margin: rhythm(.3),
      fontSize: rhythm(.5),
      color: '#88acbb',
      textShadow: 'none',
      background: 'none',
      textDecoration: 'none',
    },
    target: "_blank",
    rel: "noopener noreferrer"
  }

  const asideProps = {
    style: {
      color: '#88acbb',
      fontSize: rhythm(.5)
    }
  }

  return (<footer style={navStyle}>
    <aside {...asideProps}>
      {new Date().getFullYear()}, André Aubin - {' '}
      {intl.formatMessage({ id: 'cc' }, { a: (text) => <a href="https://creativecommons.org/publicdomain/zero/1.0/">{text}</a>})}
    </aside>
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

export default injectIntl(Footer)