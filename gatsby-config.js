module.exports = ({ contentPath = 'content', basePath = '/' }) => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
        name: 'blog',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
  ],
})
