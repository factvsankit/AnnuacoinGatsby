module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  'gatsby-plugin-sass',
  `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ],
};
