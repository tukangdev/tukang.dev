require("source-map-support").install()
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
})

const path = require("path")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const result = await wrapper(
    graphql(`
      {
        prismic {
          allProjects {
            edges {
              node {
                project_title
                project_preview_description
                project_preview_thumbnail
                project_category
                project_post_date
                _meta {
                  uid
                }
              }
            }
          }
          allPosts {
            edges {
              node {
                post_title
                post_hero_image
                post_hero_annotation
                post_date
                post_category
                post_body
                post_preview_description
                post_author
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const projectsList = result.data.prismic.allProjects.edges
  const postsList = result.data.prismic.allPosts.edges

  const projectTemplate = path.resolve("./src/templates/project.tsx")
  const postTemplate = path.resolve("./src/templates/post.tsx")

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      type: "Project",
      match: "/work/:uid",
      path: `/work/${edge.node._meta.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node._meta.uid,
      },
    })
  })

  postsList.forEach(edge => {
    createPage({
      type: "Project",
      match: "/blog/:uid",
      path: `/blog/${edge.node._meta.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
