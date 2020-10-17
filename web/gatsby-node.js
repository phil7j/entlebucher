// const path = require("path")
//
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const wuerfeTemplate = path.resolve("./src/templates/wuerfe.js")
//   const res = await graphql(`
//     query {
//       allSanityWuerfe {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `)
//   res.data.allSanityWuerfe.edges.forEach(edge => {
//     createPage({
//       component: wuerfeTemplate,
//       path: `/wuerfe/${edge.node.slug.current}`,
//       context: {
//         slug: edge.node.slug.current,
//       },
//     })
//   })
// }
