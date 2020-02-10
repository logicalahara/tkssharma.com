import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import publications from '../../data/publications'

export default class PublicationsPage extends Component {
  render() {
    const pubs = Object.entries(publications);
    const link = 'http://s.ytimg.com/yts/img/no_thumbnail-vfl4t3-4R.jpg';
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
                      return ( article.snippet.thumbnails.medium.url !== link ? (
                        <li className="youtube" key={f}>
                          <div className="youtube__item">
                            <img className="youtube__img" src={article.snippet.thumbnails.medium.url} alt={article.snippet.title} />
                          </div>
                          <div className="youtube__content">
                            <a href={`https://www.youtube.com/embed/videoseries?list=${article.id}`} target="_blank" rel="noopener noreferrer">
                              <h5>{article.snippet.title}</h5>
                              { article.snippet.description && <p className="youtube__content__description">{article.snippet.description.substr(0, 300) }</p>}
                            </a>
                          </div>
                        </li>
                        ): ''
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
