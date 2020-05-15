<p align="center">
  <a href="https://unifil.br/portal/">
    <img alt="UniFil" src="http://manager.bancarioslondrina.org.br/files/UniFil_Logo_Verical-01.png" width="200" />
  </a>
</p>
<h1 align="center">
  Colegiado de Computação UniFil em Gatsby
</h1>

Esse é um projeto de site inicado em 2020 pelos colaboradores [Eduardo Lacerda](https://github.com/dudulacerdadl) e [Ana Takaoka](https://github.com/AnaGabiK) com o intuido de criar uma página para o Colegiado de Computação da UniFil, utilizando o Gatsby como ferramenta para essa construção.

_Não conhece o gatsby? Inicie o tutorial e intale as ferramentas através do [site oficial](https://www.gatsbyjs.org/tutorial/)._

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

## 🧐 O que temos aqui dentro?

Dando uma rápida olhada nos arquivos e diretórios de nosso projeto, temos basicamente:

    .
    ├── node_modules
    ├── public
    ├── src
    |   ├── components
    |   ├── images
    |   ├── pages
    |   └── styles
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: Este diretório contém todos os módulos de código (pacotes npm) dos quais o projeto depende. Caso você não tenha esse diretório ou tenha o excluido, utilize o comando `npm install` dentro do diretório raiz do projeto para recuperá-lo.

2.  **`/public`**: É o repositório no qual está localizado os arquivos utilizados para o Deploy da página no [repositório do GitHub](https://ciencia-de-software.github.io/Colegiado/)

3.  **`/src`**: Este diretório conterá todo o código relacionado ao que você verá no front-end do site (o que você vê no navegador), como o cabeçalho do site ou um modelo de página. `src` é uma convenção para "código fonte".

    3.1   **`/components`**: Diretório onde estão salvos os componentes complementares de código, partes de código que são reaproveitados em várias páginas.

    3.2   **`/images`**: Diretório onde estão salvas todas as imagens que foram utilizadas para a construção do site.

    3.3   **`/pages`**: Diretório onde estão salvas todas as páginas do site.

    3.4   **`/styles`**: Ditetório onde estão salvos todos os arquivos de estilo do site.

4.  **`.gitignore`**: Este arquivo informa ao Git quais arquivos ele não deve rastrear nem manter em um histórico de versões.

5.  **`.prettierrc`**: Este é um arquivo de configuração para o [Prettier](https://prettier.io/). O Prettier é uma ferramenta para ajudar a manter a formatação do seu código consistente.

6.  **`gatsby-browser.js`**: É neste arquivo que o Gatsby espera encontrar qualquer uso das [APIs do navegador Gatsby](https://www.gatsbyjs.org/docs/browser-apis/) (se houver). Isso permite a personalização / extensão das configurações padrão do Gatsby que afetam o navegador.

7.  **`gatsby-config.js`**: Este é o principal arquivo de configuração de um site do Gatsby. É aqui que você pode especificar informações sobre seu site (metadados), como será o título e a descrição do site, quais plug-ins do Gatsby você gostaria de incluir, etc. (Confira os [documentos de configuração](https://www.gatsbyjs.org/docs/gatsby-config/) para mais detalhes).

8.  **`LICENSE`**: Gatsby é licenciado sob a licença MIT.

9. **`package-lock.json`** (Veja o `package.json` abaixo primeiro). Este é um arquivo gerado automaticamente com base nas versões exatas das dependências do npm que foram instaladas para o seu projeto. **(Não altere este arquivo diretamente a menos que saiba o que está fazendo).**

10. **`package.json`**: Um arquivo de manifesto para projetos Node.js., que inclui itens como metadados (nome, autor do projeto, etc.). Este manifesto é como o npm sabe quais pacotes instalar para o seu projeto.

11. **`README.md`**: Esse arquivo que você está lendo! Aqui contém informações sobre o projeto e coisas que você precisa saber para seu desenvolvimento. Você pode editar esse arquivo utilizando a linguagem Markdown.

## 💫 Deploy

Nossa página utiliza como repositório o [GitHub Pages](https://pages.github.com/). Para realização do Deploy, foi utilizado o a extenção `gh-pages`, e você pode ter uma explicação bem mais detalhada [clicando aqui](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/).