import React from "react"
import { injectIntl, Link, changeLocale } from "gatsby-plugin-intl"

import { rhythm } from "../utils/typography"
import { faToriiGate, faPortrait, faFlag } from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  render() {
    const { intl } = this.props

    const onChangeLocale = () => {
      changeLocale(intl.locale === 'fr' ? 'en' : 'fr')
    }

    const navStyle = {
      marginBottom: rhythm(1.5),
      marginTop: 0,
      display: 'flex',
    }

    const linkStyle = {
      boxShadow: `none`,
      paddingTop: rhythm(.5),
      marginRight: rhythm(1),
      textDecoration: `none`,
      cursor: 'pointer',
      textAlign: 'center',
      color: `inherit`,
    }

    return (
      <nav
        style={navStyle}
      >
        <Link
          style={linkStyle}
          to={`/`}
        >
          <FontAwesomeIcon icon={faToriiGate} />{' '}
          {intl.formatMessage({ id: 'home' })}
        </Link>
        <Link
          style={linkStyle}
          to={`/about`}
        >
          <FontAwesomeIcon icon={faPortrait} />{' '}
          {intl.formatMessage({ id: 'about' })}
        </Link>
        <a // eslint-disable-line
          style={{ marginLeft: 'auto', ...linkStyle }} // eslint-disable-line
          onClick={onChangeLocale} // eslint-disable-line
          href="#" // eslint-disable-line
        >
          <FontAwesomeIcon icon={faFlag} />{' '}
          {intl.formatMessage({ id: 'change-locale' })}
        </a>
      </nav>
    )
  }
}

export default injectIntl(Header)
