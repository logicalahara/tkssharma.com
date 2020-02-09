import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import publications from '../../data/publications'

export default class PublicationsPage extends Component {
  render() {
    const pubs = Object.entries(publications)
    return (
      <Layout>
        <Helmet title={`Published Articles – ${config.siteTitle}`} />
        <div className="container">
          <header className="page-header">
            <h1>Publications</h1>
          </header>
          <div className="page">
            <p>I've written for.</p>
            {pubs.map((publication, i) => {
              const company = publication[0]
              const articles = publication[1]
              return (
                <article key={company}>
                  <h2 className="publication-company" id={company.replace(/\s/g, '')}>
                    {company}
                  </h2>
                  <ul key={i}>
                    {articles.map((article, f) => {
                      return (
                        <li key={f}>
                          <a href={`https://www.youtube.com/embed/videoseries?list=${article.id}`} target="_blank" rel="noopener noreferrer">
                            {article.snippet.title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}
