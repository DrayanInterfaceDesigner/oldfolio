/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const {data} = await graphql(`
  query Projects {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `)
  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}
