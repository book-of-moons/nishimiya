exports.createPages = ({ graphql, actions }) => {
  const { createPage, createPageDependency } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSanityPost {
          edges {
            node {
              title
              slug {
                current
              }
              author {
                name
                image {
                  asset {
                    url
                  }
                }
              }
              mainImage {
                asset {
                  url
                }
              }
              categories {
                title
              }
              publishedAt
              body {
                _key
                _type
                style
                list
              }
            }
          }
        }
      }
    `)
  }).then(result => {
    result.data.allSanityPost.edges.forEach(({ node }) => {
      const path = node.slug.current
      createPage({
        path,
        component: path.resolve("./src/templates/page.js"),
        context: {
          slug: node.slug.current,
        },
      })
      createPageDependency({ path, nodeId: node.id })
    })
  })
}
