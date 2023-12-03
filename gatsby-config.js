/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `lastbit-website-static`,
    siteUrl: `https://www.lastbit.io`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lastbit-website`,
        short_name: `lastbit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#00204a`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/logo.png`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ]
};