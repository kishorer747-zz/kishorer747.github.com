require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `ConfusedEngineer`,    
    siteTitleAlt: `Confused Engineer - Personal blog`,
    siteHeadline: `Confused Engineer - Personal blog`,
    siteUrl: `https://kishorer747.github.io`,
    siteDescription: `Personal Blog. Biking. Motorcycle. Travel. Technology. Software. Wander`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Kishore Rajendra`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `blog`,
            slug: `/blog`,
          },
          {
            title: `TIL`,
            slug: `/til`,
          },
          {
            title: `movies`,
            slug: `/movies`,
          },
          {
            title: `places`,
            slug: `/places`,
          },
        ],
        externalLinks: [
          {
            name: `Instagram`,
            url: `https://www.instagram.com/confusedengineer.in/`,
          },
          {
            name: `LinkedIn`,
            url: `https://in.linkedin.com/in/kishorer747`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-4TTE6V5TRY",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Confused Engineer - Personal blog`,
        short_name: `confused|engineer`,
        description: `Personal Blog. Biking. Motorcycle. Travel. Technology. Software. Wander`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
