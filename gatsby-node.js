const fs = require('fs')

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'content'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating ${contentPath} directory.`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading blogs', result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post) => {
    const { slug } = post

    createPage({
      path: slug,
      component: require.resolve('./src/components/singlePost.tsx'),
      context: {
        id: post.id,
      },
    })
  })
}
