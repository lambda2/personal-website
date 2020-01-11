import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import Image from "gatsby-image"

import Layout from "../components/layout"
import BioContent from "../components/about"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogAbout extends React.Component {
  render() {

    const { data } = this.props
    const { author } = data.site.siteMetadata
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <div
          style={{
            display: `flex`,
            flexWrap: 'wrap',
            margin: 'auto',
            marginBottom: rhythm(2.5),
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              margin: 'auto',
              marginBottom: rhythm(1),
              minWidth: 250,
              flex: '0 0 250px',
              borderRadius: `5px`,
            }}
            imgStyle={{
              borderRadius: `5px`,
            }}
          />
          <BioContent />
        </div>
      </Layout>
    )
  }
}

export default injectIntl(BlogAbout)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        social {
          twitter
        }
      }
    }
    avatar: file(absolutePath: { regex: "/me.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            lang
            description
          }
        }
      }
    }
  }
`
