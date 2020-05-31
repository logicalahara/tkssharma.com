import React, { Component } from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import config from '../../data/SiteConfig'

export default class SEO extends Component {
  render() {
    const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let image = ''
    let postURL;
    let imageThumb;
    if (postSEO) {
      const postMeta = postNode.frontmatter
      title = postMeta.title
      description = postMeta.description ? postMeta.description : postNode.excerpt
      if (postMeta.thumbnail) {
        image = postMeta.thumbnail.childImageSharp.fixed.src
      }
      postURL = urljoin(config.siteUrl, replacePath(postPath));
      imageThumb = postNode.frontmatter.image
      ? postNode.frontmatter.image.childImageSharp.fixed.src
      : null
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = config.siteLogo;
      imageThumb = image;
    }

    image = urljoin(config.siteUrl, image);
    if(imageThumb){
      imageThumb = urljoin(config.siteUrl, imageThumb)
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

    if (postSEO) {
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
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
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
        <script data-ad-client="ca-pub-4650067392768536" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
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
