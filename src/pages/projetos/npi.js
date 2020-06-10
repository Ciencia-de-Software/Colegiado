import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Cabecalho from "../../components/cabecalho/cabecalho"
import Rodape from "../../components/rodape/rodape"
import Npi from "../../images/npi-imagem.jpeg"
import Ricado from "../../images/ricardo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "./projetos-npi.css"

library.add(fab)
library.add(fas)

const AlunosProjetos = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges{
                    node {
                        frontmatter {
                            aluno
                            linkedin 
                            github
                            projetoatual
                            titulotrabalho
                            resumo
                            pagprojetos
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Cabecalho />
            <div class="pag">
                <article class="corpo">
                    <div class="titulo-npi">
                        <p><span class="span-npi">NPI</span> - Núcleo de Práticas em Informática</p>
                    </div>
                    <div class="div-sobre-npi">
                        <span class="titulo-sobre-npi">
                            Sobre
                        </span>
                    </div>
                    <div class="conteudo-npi">
                        <table>
                            <tr>
                                <td class="descriscao-npi">
                                    <p>
                                        O Núcleo de Práticas em Informática (NPI) da UniFil foi criado para fomentar oportunidades de
                                        experiência no dia a dia da profissão para os alunos dos cursos de Engenharia de Software e Ciência da Computação.
                                    </p>
                                    <br />
                                    <p>
                                        O NPI mobiliza equipes de alunos, supervisionados por professores, para prestação de serviços de consultoria,
                                        assessoria e desenvolvimento de software a entidades sem fins lucrativos, organizações da sociedade civil de
                                        interesse público, organismos governamentais, trabalhos comunitários de cidadania e micro e pequenas empresas.
                                    </p>
                                </td>
                                <td>
                                    <img class="imagem-npi" src={Npi} alt="NPI" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="div-trabalhos-npi">
                        <span class="titulo-trabalhos-npi">
                            Projetos
                        </span>
                    </div>

                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <>
                                <div class="div-conteudos-trabalhos">
                                    <div class="titulo-aluno">
                                        {edge.node.frontmatter.aluno}
                                        <a href={edge.node.frontmatter.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                        <a href={edge.node.frontmatter.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                    </div>
                                    <div class="corpo-aluno">
                                        <p><span>Projeto Atual:</span> <a href={edge.node.frontmatter.projetoatual} target="_blank" rel="noopener noreferrer">{edge.node.frontmatter.titulotrabalho}</a></p>
                                        <p><span>Descrição:</span> {edge.node.frontmatter.resumo}</p>
                                    </div>
                                    <div class="botao-projeto">
                                        <a href={edge.node.frontmatter.pagprojetos} target="_blank" rel="noopener noreferrer">
                                            <span class="botao-acessar">
                                                Acessar Todos os Projetos
                                                </span>
                                        </a>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                    <table class="div-conteudos-trabalhos">
                        <tr>
                            <td>
                                <div class="titulo-professor">
                                    Ricardo Inacio Alvares e Silva
                                    <a href="https://www.linkedin.com/in/ricardo-inacio-alvares-e-silva-32a3b023" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                </div>
                                <div class="corpo-professor">
                                    <p><span>Coordenador do Projeto</span></p>
                                    <br />
                                    <p>Professor adjunto  da UniFil - Centro Universitário Filadélfia, Bacharel em Ciência da Computação pela Pontifícia Universidade Católica de Minas Gerais (PUC-MG), e mestre, também em Ciência da Computação, pela Universidade Estadual de Londrina (UEL), quando foi bolsista CAPES.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="http://lattes.cnpq.br/6856943558243501" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar Lattes
                                        </span>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <img class="imagem-professor" src={Ricado} alt="NPI" />
                            </td>
                        </tr>
                    </table>
                    <div class="atendimento-npi">
                        Atendimento
                    </div>
                    <ul class="dados-do-npi">
                        <li>
                            <FontAwesomeIcon icon={['fas', 'clock']} />
                            <span>Segunda a sexta-feira: 08h às 17h30</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'home']} />
                            <span>Av. Juscelino Kubitschek, nº 1626 - Centro</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'phone-alt']} />
                            <span>43 3375 7326</span>
                        </li>
                    </ul>
                </article>
            </div>
            <Rodape />
        </>
    )
}

export default AlunosProjetos