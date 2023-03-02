module.exports = {
  siteMetadata: {
    title: 'Sienna Luong',
    description:
      'Sienna Luong is an aspiring software engineer based in London, Ontario',
    url: 'https://siennaluong.github.io/',
    author: 'Sienna Luong',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Sienna Luong is an aspiring software engineer based in London, Ontario',
    menuLinks: [
      {
        name: 'Sienna\'s Blog',
        slug: '/',
      },
      {
        name: 'About me',
        slug: '/example/',
      },
      {
        name: 'Food',
        slug: '/food/',
      },
    ],
    footerLinks: [
      {
        name: 'Portfolio',
        url: 'https://siennaluong.github.io/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
