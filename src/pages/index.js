import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import Publication from '../components/publicationListing'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import publications from '../../data/publications'
import quotes from '../../data/quotes'
import tks from '../../content/images/profile.png'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Developer & Writer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Hey, I'm Tarun (@tkssharma)`}</h1>
              <p>
                I'm a full stack software developer creating{' '}
                <a href="https://github.com/tkssharma" target="_blank" rel="noopener noreferrer">
                  open source
                </a>{' '}
                projects and <Link to="/blog">writing</Link> about modern JavaScript client and server side.
              </p>
              <div className="social-buttons">
                <a
                  className="patreon"
                  href="https://www.patreon.com/tkssharma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patreon
                </a>
                <GitHubButton
                  href="https://github.com/tkssharma"
                  data-size="large"
                  data-show-count="true"
                >
                  tkssharma
                </GitHubButton>
              </div>
            </div>
            <div className="newsletter-section">
              <img src={tks} className="newsletter-avatar" alt="Tania" />
              <div>
                <h3>About Me </h3>
                <p>
                  I write tutorials. Get an update when something new comes out by subscribing my channel/Blogs
                </p>
                <a className="button" href="https://www.youtube.com/channel/UCS1NeZF0Or2E1RAV9hQJz3g?view_as=subscriber">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Latest Articles
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Most Popular
              <Link to="/categories/popular" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>Open Source Projects/Ideas</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Talks and Session</h2>
            <SimpleListing simple data={speaking} />
          </section>

          <section className="section">
            <h2>My Publications</h2>
            <Publication simple data={publications.YouTube} />
          </section>

          <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
