exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const result = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)
    
    result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: require.resolve("./src/templates/blog-post.js"),
        context: {
            slug: node.frontmatter.slug,
        },
        })
    })
}