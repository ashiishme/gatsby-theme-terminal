module.exports = ({ contentPath = 'content' }) => ({
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: contentPath,
        ignore: ['**/blog'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${contentPath}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
})
