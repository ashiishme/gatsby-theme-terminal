module.exports = ({ contentPath = 'content', basePath = '/' }) => ({
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    'gatsby-plugin-mdx',
  ],
})
