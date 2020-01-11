import React from "react"
// import { Link } from "gatsby"
import { injectIntl, Link, changeLocale } from "gatsby-plugin-intl"

import { rhythm, scale } from "../utils/typography"

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
      // paddingBottom: rhythm(.5),
      // paddingLeft: 0,
      // paddingRight: rhythm(1),
      marginRight: rhythm(1),
      textDecoration: `none`,
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
          {intl.formatMessage({ id: 'home' })}
        </Link>
        <Link
          style={linkStyle}
          to={`/about`}
        >
          {intl.formatMessage({ id: 'about' })}
        </Link>
        <a
          style={linkStyle}
          onClick={onChangeLocale}
        >
          {intl.formatMessage({ id: 'change-locale' })}
        </a>
      </nav>
    )
  }
}

export default injectIntl(Header)
