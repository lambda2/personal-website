import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import { rhythm } from "../utils/typography"
import Header from "./header"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header><Header /></header>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default injectIntl(Layout)
