// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {

  siteMetadata: {
    title: `Entlebucher Sennenhunde`,
    description: `Entlebucher Sennenhunde Von der Laughy`,
    author: `Philip Johnson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`./src/components/layout.js`),
        }
   },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '2dwxpbw0',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Philips-Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/entlebucher.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Dosis`,
            variants: [`400`,`500`,`600`, `800`]
          },
          {
            family: `Abhaya Libre`,
            variants: [`600`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ],
}
