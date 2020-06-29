import React from "react"
import "./eventos.css"
import { graphql, useStaticQuery } from 'gatsby'

const Noticias = () => {
    const noticia = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(noticias)/"}}) {
                edges {
                    node {
                        frontmatter {
                            link
                            title
                        }
                    }
                }
            }
        }`)
    return(
        <>
            <div class="teventos">
                <div class="tabtítulo">
                    <h1>Notícias</h1>
                </div>
            {noticia.allMarkdownRemark.edges.map((edge) => {
                return (
                    <a href={edge.node.frontmatter.link} target="_blank" rel="noopener noreferrer">
                        <div class="tcorpo">
                            <p class="not1">{edge.node.frontmatter.title}</p>
                        </div>
                    </a>
                )
            })}
                <div class="maisnot">
                    <a href="https://www.unifil.br/portal/institucional/quem-somos/noticias" target="_blank" rel="noopener noreferrer">+ Ver mais notícias</a>
                </div>
            </div>
        </>
    )
}
        
export default Noticias
