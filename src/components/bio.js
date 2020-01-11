/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { injectIntl, Link } from "gatsby-plugin-intl"

import { rhythm } from "../utils/typography"

const Bio = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/me.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        {intl.formatMessage({ id: 'bio-message' }, { author, strong: str => <Link to={`/about`}><b>{str}</b></Link> })}{` `}
        {/* Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {` `} */}
        {/* <Link to={`/about`}>
          {intl.formatMessage({ id: 'who-am-i' })}
        </Link> */}
      </p>
    </div>
  )
}

export default injectIntl(Bio)
