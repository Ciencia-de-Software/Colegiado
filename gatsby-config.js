/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/Colegiado",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projetos-dos-alunos`,
        path: `${__dirname}/src/pages/projetos/projetos-dos-alunos`,
      },
    },
    "gatsby-transformer-remark"
  ]
}
