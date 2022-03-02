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

function findDepthOfFileOrDir(node) {
  const { absolutePath } = node
  const absPath = absolutePath.split('/content')[1]
  const pathArr = absPath.split('/').filter((item) => item)
  return pathArr.length
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const blogTypes = `
    type Mdx implements Node {
      fields: Fields
    }
    
    type Fields {
      postType: String
    }
  `

  const directoryTypes = `
    type Directory implements Node {
      fields: Fields
    }

    type Fields {
      depth: String!
    }
  `

  const FileTypes = `
    type File implements Node {
      fields: Fields
    }

    type Fields {
      depth: String!
    }
  `

  createTypes(blogTypes)
  createTypes(directoryTypes)
  createTypes(FileTypes)
}

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions
  const {
    internal: { type },
  } = node

  if (type === 'Directory' || type === 'File') {
    const depth = findDepthOfFileOrDir(node)
    createNodeField({
      node,
      name: 'depth',
      value: depth,
      type: 'string',
    })
  }

  if (type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent)

    createNodeField({
      node,
      name: 'postType',
      value: sourceInstanceName,
      type: 'string',
    })
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
      path: `/blog/${slug}`,
      component: require.resolve('./src/components/blog/singlePost.tsx'),
      context: {
        id: id,
      },
    })
  })
}
