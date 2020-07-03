import React from "react"
import "./eventos-pag.css"
import { graphql, useStaticQuery } from 'gatsby'

const Noticias = () => {
    const noticia = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(noticias)/"}}) {
                edges {
                    node {
                        frontmatter {
                            link
                            title
                            resume
                            date
                            author
                        }
                    }
                }
            }
        }`)
    return(
        <>
            <div class="tevento">
                <div class="tabtítulo">
                    <h1>Notícias</h1>
                </div>
            {noticia.allMarkdownRemark.edges.map((edge) => {
                return (
                    <div class="tcorpo">
                        <details>
                            <summary class="ttitulo">{edge.node.frontmatter.title}</summary>
                            <p class="tresumo">{edge.node.frontmatter.resume}</p>
                            <p class="link"><a href={edge.node.frontmatter.link} target="_blank" rel="noopener noreferrer">Continuar</a></p>
                        </details>
                        <p class="linhazinha">{edge.node.frontmatter.date} - {edge.node.frontmatter.author}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}
        
export default Noticias
