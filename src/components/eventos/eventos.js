import React from "react"
import { Link } from "gatsby"
import "./eventos.css"
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
            <div class="teventos">
                <div class="tabtítulos">
                    <h1>Notícias</h1>
                </div>
            {noticia.allMarkdownRemark.edges.map((edge) => {
                return (
                    <div class="tcorpos">
                        <details>
                            <summary class="ttitulos">{edge.node.frontmatter.title}</summary>
                            <p class="tresumos">{edge.node.frontmatter.resume}</p>
                            <p class="links"><a href={edge.node.frontmatter.link} target="_blank" rel="noopener noreferrer">Continuar</a></p>
                        </details>
                        <p class="linhazinha">{edge.node.frontmatter.date} - {edge.node.frontmatter.author}</p>
                    </div>
                )
            })}
                <div class="maisnots">
                    <Link to="/noticias/">+ Ver mais notícias</Link>
                </div>
            </div>
        </>
    )
}
        
export default Noticias
