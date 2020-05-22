import React from "react"
import Cabecalho from "../../components/cabecalho/cabecalho"
import Rodape from "../../components/rodape/rodape"
import Npi from "../../images/npi-imagem.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
library.add(fas)

export default () =>
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
                                <img class="imagem-npi" src={Npi} alt="NPI"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="div-trabalhos-npi">
                <span class="titulo-trabalhos-npi">
                    Trabalhos
                </span>
                </div>
                <div class="div-conteudos-trabalhos">
                    <table>
                        <tr>
                            <td>
                                <div class="titulo-aluno">
                                    Nome do Aluno 
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                </div>
                                <div class="corpo-aluno">
                                    <p><span>TRABALHO:</span> Nome do trabalho</p>
                                    <p><span>DESCRIÇÃO:</span> Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar
                                        </span>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div class="titulo-aluno">
                                    Nome do Aluno 
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                </div>
                                <div class="corpo-aluno">
                                    <p><span>TRABALHO:</span> Nome do trabalho</p>
                                    <p><span>DESCRIÇÃO:</span> Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar
                                        </span>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="titulo-aluno">
                                    Nome do Aluno 
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                </div>
                                <div class="corpo-aluno">
                                    <p><span>TRABALHO:</span> Nome do trabalho</p>
                                    <p><span>DESCRIÇÃO:</span> Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar
                                        </span>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div class="titulo-aluno">
                                    Nome do Aluno 
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                </div>
                                <div class="corpo-aluno">
                                    <p><span>TRABALHO:</span> Nome do trabalho</p>
                                    <p><span>DESCRIÇÃO:</span> Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar
                                        </span>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="titulo-aluno">
                                    Nome do Aluno 
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                </div>
                                <div class="corpo-aluno">
                                    <p><span>TRABALHO:</span> Nome do trabalho</p>
                                    <p><span>DESCRIÇÃO:</span> Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar
                                        </span>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div class="titulo-aluno">
                                    Nome do Aluno 
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
                                </div>
                                <div class="corpo-aluno">
                                    <p><span>TRABALHO:</span> Nome do trabalho</p>
                                    <p><span>DESCRIÇÃO:</span> Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.</p>
                                </div>
                                <div class="botao-projeto">
                                    <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                                        <span class="botao-acessar">
                                            Acessar
                                        </span>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
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