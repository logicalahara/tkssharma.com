import React, { Component } from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import config from '../../data/SiteConfig'

export default class SEO extends Component {
  render() {
    const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));
    const { postNode, postSEO, postPath } = this.props;
    let title ='';
    let description
    let postURL =';'
    let image = ''
    let imageThumb;
  if(postNode){
     title = postNode.snippet.title;
     description = postNode.snippet.description;
     image =  postNode.snippet.thumbnails.medium.url;
    imageThumb =  postNode.snippet.thumbnails.default.url;
    postURL = urljoin(config.siteUrl, replacePath(`/publications/${postPath}`));

  }
    const blogURL = urljoin(config.siteUrl, config.pathPrefix)
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]

    if (postNode) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        }
      )
    }
    return (
      <Helmet>
        <meta name="description" content={description} />
        <meta name="image" content={imageThumb} />

        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO && <meta property="og:type" content="article" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageThumb} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.userTwitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageThumb} />
      </Helmet>
    )
  }
}
/*
 "snippet": {
        "publishedAt": "2020-05-09T04:50:04.000Z",
        "channelId": "UCS1NeZF0Or2E1RAV9hQJz3g",
        "title": "Angular  Webinar Series | Weekend webcasts",
        "description": "Angular  brings some new features to the popular JavaScript framework for building mobile, desktop and web applications.  Angular is an all-encompassing JavaScript framework that is frequently used by developers all over the world for building web, desktop, and mobile applications",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cW-Sxjs5KFY/default.jpg",
            "width": 120,
            "height": 90
          },
          */