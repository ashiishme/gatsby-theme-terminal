const fs = require('fs')
const path = require('path')

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'content'
  const blogPath = options.blogPath || 'blog'

  const directories = [contentPath, path.join(contentPath, blogPath)]

  directories.forEach((directory) => {
    if (!fs.existsSync(directory)) {
      reporter.info(`Creating ${directory} folder.`)
      fs.mkdirSync(directory)
    }
  })
}

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions
  const {
    internal: { type },
  } = node

  if (type !== 'Mdx') return

  const { sourceInstanceName } = getNode(node.parent)

  createNodeField({
    node,
    name: 'postType',
    value: sourceInstanceName,
  })
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
          fields {
            postType
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading blogs', result.errors)
    return
  }

  const posts = result.data.allMdx.nodes.filter(
    (node) => node.fields.postType === 'blog'
  )

  posts.forEach((node) => {
    const { id, slug } = node
    createPage({
      path: slug,
      component: require.resolve('./src/components/blog/singlePost.tsx'),
      context: {
        id: id,
      },
    })
  })
}
