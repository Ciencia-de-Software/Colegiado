/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/Colegiado",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo3.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/eventos/noticias`,
        name: 'noticias',
      },
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
