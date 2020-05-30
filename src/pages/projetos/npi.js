import React from "react"
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

const Colaboradores = props => (
    <>
    <div class="titulo-aluno">
        {props.aluno}
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a href={props.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
    </div>
    <div class="corpo-aluno">
        <p><span>Projeto Atual:</span> <a href={props.projetoatual} target="_blank" rel="noopener noreferrer">{props.titulotrabalho}</a></p>
        <p><span>Descrição:</span> {props.resumo}</p>
    </div>
    <div class="botao-projeto">
        <a href={props.pagprojetos} target="_blank" rel="noopener noreferrer">
            <span class="botao-acessar">
                Acessar Todos os Projetos
            </span>
        </a>
    </div>
    </>
)

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
                    Projetos
                </span>
                </div>
                <div class="div-conteudos-trabalhos">
                    <table>
                        <tr>
                            <td>
                                <Colaboradores
                                    aluno = "Leonardo Lima"
                                    linkedin = "https://www.linkedin.com/in/leonardo-vin%C3%ADcius-r-7ba1a6118/"
                                    github = "https://github.com/LeonardoRochaLima"
                                    projetoatual = "https://www.unifil.br/portal/institucional/servicos/programa-aplicativo-fiscal"
                                    titulotrabalho = "PAF-ECF"
                                    resumo = "O Programa Aplicativo Fiscal – Emissor Cupom Fiscal foi desenvolvido para possibilitar o envio de comandos ao software básico do ECF, sem capacidade de alterá-lo ou ignorá-lo."
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                            <td>
                                <Colaboradores
                                    aluno = "Pedro Rocha"
                                    linkedin = "https://www.linkedin.com/in/pedro-fernando-dalbello-rocha-437b791a5/"
                                    github = "https://github.com/"
                                    projetoatual = "https://www.unifil.br/portal/institucional/servicos/programa-aplicativo-fiscal"
                                    titulotrabalho = "PAF-ECF"
                                    resumo = "O Programa Aplicativo Fiscal – Emissor Cupom Fiscal foi desenvolvido para possibilitar o envio de comandos ao software básico do ECF, sem capacidade de alterá-lo ou ignorá-lo."
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Colaboradores
                                    aluno = "Ana Kataoka"
                                    linkedin = "https://www.linkedin.com/in/ana-kataoka-9370601a4/"
                                    github = "https://github.com/AnaGabiK"
                                    projetoatual = "https://gitlab.com/npi-unifil/site-npi"
                                    titulotrabalho = "Sistema Web do Colegiado de Computação UniFil"
                                    resumo = "Projeto de criação do site para o Colegiado de Computação do Centro de Ensino Filadélfia (UniFil), utilizando Gatsby."
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                            <td>
                                <Colaboradores
                                    aluno = "Eduardo Lacerda"
                                    linkedin = "https://www.linkedin.com/in/dudulacerda/"
                                    github = "https://github.com/dudulacerdadl"
                                    projetoatual = "https://gitlab.com/npi-unifil/site-npi"
                                    titulotrabalho = "Sistema Web do Colegiado de Computação UniFil"
                                    resumo = "Projeto de criação do site para o Colegiado de Computação do Centro de Ensino Filadélfia (UniFil), utilizando Gatsby."
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Colaboradores
                                    aluno = "Guilherme Jordão"
                                    linkedin = "https://www.linkedin.com/"
                                    github = "https://github.com/"
                                    projetoatual = "https://gitlab.com/Tiotiop/projeto_estagio"
                                    titulotrabalho = "Coffe-Break"
                                    resumo = "[Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.]"
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                            <td>
                                <Colaboradores
                                    aluno = "Leonardo Morita"
                                    linkedin = "https://www.linkedin.com/in/leonardo-morita-7a340018a/"
                                    github = "https://github.com/leonardomorita"
                                    projetoatual = "https://gitlab.com/npi-unifil/gerenciador-horario-psicologia"
                                    titulotrabalho = "Sistema gerenciador de quadro de horário para o curso de Psicologia da Unifil"
                                    resumo = "O sistema será desenvolvido para o curso de Psicologia da UniFil."
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Colaboradores
                                    aluno = "Maria Fernanda"
                                    linkedin = "https://www.linkedin.com/in/maria-fernanda-vaz-romero-51b369184/"
                                    github = "https://github.com/VazMF"
                                    projetoatual = "https://github.com/VazMF/edx"
                                    titulotrabalho = "Clonagem do Hacker News"
                                    resumo = "Clonagem do site Hacker News como forma de estudo e treino das habilidades em HTML5 e CSS3."
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                            <td>
                                <Colaboradores
                                    aluno = "Sergio Saruiji"
                                    linkedin = "https://www.linkedin.com/"
                                    github = "https://github.com/"
                                    projetoatual = "https://gitlab.com/"
                                    titulotrabalho = "[Nome do trabalho]"
                                    resumo = "[Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.]"
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Colaboradores
                                    aluno = "Walter Marinho"
                                    linkedin = "https://www.linkedin.com/in/walter-marinho-47a98b190//"
                                    github = "https://github.com/walttsm"
                                    projetoatual = "https://gitlab.com/Tiotiop/projeto_estagio"
                                    titulotrabalho = "Coffe-Break"
                                    resumo = "[Esse espaço é dedicado a descrição do trabalho apresentado, escreva sobre o que é o trabalho e caso queira um comentário adicional sobre.]"
                                    pagprojetos = "https://gitlab.com/npi-unifil"
                                />
                            </td>
                        </tr>
                    </table>
                </div>
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
                            <img class="imagem-professor" src={Ricado} alt="NPI"/>
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