const config = {
  siteTitle: 'Tarun Sharma | Profile',
  siteTitleShort: 'Tarun Sharma | @tkssharma',
  siteTitleAlt: 'Tarun Sharma',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.tkssharma.com',
  repo: 'https://github.com/tkssharma/tkssharma.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Hi, I’m Tarun.😎 I help people to make better world by good apps, I am Publisher, Trainer Developer, working on Enterprise and open source Technologies JavaScript frameworks (React Angular 2.x), I work with client side and server side javascript programming',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-26353225-1',
  postDefaultCategoryID: 'Tech',
  newsletter: '',
  newsletterEmbed: '',
  userName: 'Tarun',
  userEmail: 'tarun.softengg@gmail.com',
  userTwitter: 'tkssharma',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Resume',
      link: '/resume/',
    },
    {
      name: 'Webinar',
      link: '/webinar/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
