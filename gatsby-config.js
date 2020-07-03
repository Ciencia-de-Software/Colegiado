/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Colegiado Computação - UniFil`,
    siteUrl: `https://ciencia-de-software.github.io/Colegiado/`,
    description: `Projeto de criação do site para o Colegiado de Computação do Centro de Ensino Filadélfia (UniFil), utilizando Gatsby.`,
  },
  /* Your site config here */
  pathPrefix: "/Colegiado",
  plugins: [
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
