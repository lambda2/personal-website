import React from "react"
import { injectIntl, Link, changeLocale } from "gatsby-plugin-intl"

import { rhythm } from "../utils/typography"
import { faToriiGate, faPortrait, faFlag } from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  render() {
    const { location, title, children, intl } = this.props
    console.log({intl});
    console.log({ formatted: intl.formatMessage({ id: 'about' })});
    const onChangeLocale = () => {
      changeLocale(intl.locale == 'fr' ? 'en' : 'fr')
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
        <a
          style={{marginLeft: 'auto', ...linkStyle}}
          onClick={onChangeLocale}
        >
          <FontAwesomeIcon icon={faFlag} />{' '}
          {intl.formatMessage({ id: 'change-locale' })}
        </a>
      </nav>
    )
  }
}

export default injectIntl(Header)
