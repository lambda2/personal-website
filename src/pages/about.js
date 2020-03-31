import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import { Avatar } from "../elements/avatar"

import Layout from "../components/layout"
import About from "../components/about"
import Timeline from "../components/timeline"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogAbout extends React.Component {
  render() {

    const { data, intl } = this.props
    const { author } = data.site.siteMetadata
    const siteTitle = data.site.siteMetadata.title

    const portrait = <Avatar
      fixed={data.avatar.childImageSharp.fixed}
      alt={author}
    />
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <About image={portrait}/>
        <Timeline />
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
        fixed(width: 300, height: 300) {
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
