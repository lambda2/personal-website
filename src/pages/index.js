import React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

import { rhythm } from "../utils/typography"

import { faEmptySet } from '../components/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BlogIndex extends React.Component {
  render() {
    const { data, intl } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.lang === intl.locale)
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={intl.formatMessage({ id: 'home' })} />
        <About />
        {posts.length === 0 && <p>
          <FontAwesomeIcon icon={faEmptySet} />{' '}
          {intl.formatMessage({id: 'no-posts'})}
        </p>}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default injectIntl(BlogIndex)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
