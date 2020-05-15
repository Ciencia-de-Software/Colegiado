<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Colegiado de Computação UniFil em Gatsby
</h1>

Esse é um projeto de site inicado em 2020 pelos colaboradores [Eduardo Lacerda](https://github.com/dudulacerdadl) e [Ana Takaoka](https://github.com/AnaGabiK) com o intuido de criar uma página para o Colegiado de Computação da UniFil, utilizando o Gatsby como ferramenta para essa construção.

_Não conhece o gatsby? Inicie o tutorial e intale as ferramentas atravéz do [site oficial](https://www.gatsbyjs.org/tutorial/)._

## 🚀 Iniciando o Projeto

1.  **Ferramentas necessárias.**

    Para começar a edição desse projeto, você precisará de algumas ferramentas para utilização do Gatsby, entre elas estão o [Node.js](https://nodejs.org/pt-br/) e o [Git](https://gitforwindows.org/). Você também precisará de um editor de códigos, nossa recomendação é utilizar o [Visual Studio Code](https://code.visualstudio.com/), mas você é livre para usar o de sua preferência.

    Tendo essas ferramentas em sua máquina, agora você precisa insatalar o Gatsby CLI através do Node.js.

    ```shell
    # Dentro do terminal, execute o seguinte comando:
    npm install -g gatsby-cli
    ```

    Agora o Gatsby está pronto para ser executado! Para ver os comandos disponíveis agora, execute:

    ```shell
    gatsby --help
    ```

2.  **Comece o desenvolvimento.**

    Navegue até o diretório do seu novo site e inicie-o com os seguintes comandos:

    ```shell
    cd colegiado
    # Caso tenha instalado o Visual Studio Code, execute o seguinte comando para abrir o código no mesmo:
    code .
    # Logo após, volte para o terminal e execute o seguinte comando:
    gatsby develop
    ```

3.  **Abra o código fonte e comece a editar!**

    Seu site agora está sendo executado em `http://localhost:8000`!

    _Nota: Você também verá um segundo link: `http://localhost:8000/___graphql`. Esta é uma ferramenta que você pode usar para experimentar a consulta de seus dados. Saiba mais sobre o uso dessa ferramenta no [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Salve suas alterações e o navegador será atualizado em tempo real!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
