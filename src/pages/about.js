import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogAbout extends React.Component {
  render() {

    const { data, intl } = this.props
    const { author, social } = data.site.siteMetadata
    const siteTitle = data.site.siteMetadata.title
    const logoStyle = {
      display: 'inline-block',
      height: '16px',
      width: '16px',
      lineHeight: 0,
      margin: 0,
    }
    const linkStyle = {
      marginLeft: '2px'
    }
    const posts = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.lang === intl.locale)
    console.log({ lang: intl });
    console.log({ posts });
    console.log({ edges: data.allMarkdownRemark.edges });

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
          <content
            style={{
              paddingLeft: rhythm(1),
              flex: '1 0 250px',
            }}
          >
            <p>Hey, I'm André Aubin. ex-developper@<a style={linkStyle} href="https://42.fr">42</a>. CTO@<a style={linkStyle} href="https://pandascore.co">PandaScore</a>.</p>

            <p>You can reach me on <img style={logoStyle} src="https://keybase.io/images/icons/icon-keybase-logo-48@2x.png" alt="keybase logo" /> <a href="https://keybase.io/lambda2">Keybase</a>, get my <a href="https://keybase.io/lambda2/pgp_keys.asc">PGP key</a> or see my work on <img style={logoStyle} src="https://github.githubassets.com/pinned-octocat.svg" alt="github-logo" /> <a href="https://github.com/lambda2">Github</a>.</p>
          </content>
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
