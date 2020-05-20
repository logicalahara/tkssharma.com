import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout';
import config from '../../data/SiteConfig';
import SEO from '../components/YoutubeSeo';
import UserInfo from '../components/UserInfo';

const Data = require('../../data/publications');

const transform = str => {
  const title = str.replace(/\s\s+/g, ' ');
  return title.split(' ').join('-');
}

export default class PublishedVideoTemplate extends Component {
  render() {
    let titleData = {};
    const { key } = this.props.pageContext;
    const result = Data.YouTube.filter(i => {
      titleData = i.snippet.title && transform(i.snippet.title);
      return key === titleData;
    })[0];

    return (
      <Layout>
        <Helmet>
          <title>{`${result.snippet.title}`}</title>
        </Helmet>
        <SEO postPath={key} key={key} postNode={result} postSEO />
        <div className="gradient-youtube-section articles">

          <div className="container">
            <div className="container">
              <h2 className="text-center">{result.snippet.title}</h2>
              <div>
                <h5>{result.snippet.description}</h5>
              </div>
            </div>
          </div>
        </div>
        <UserInfo config={config} />
      </Layout>
    )
  }
}