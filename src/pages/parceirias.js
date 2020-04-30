import React from "react"
import Cabecalho from "../components/cabecalho/cabecalho"
import Rodape from "../components/rodape/rodape"
import Abramti from "../images/ABRAMTI/abramti.png"
import Bizagi from "../images/Bizagi/bizagi.png"
import Cisco from "../images/CISCO/cisco.jpg"
import Google from "../images/Google/google.jpg"
import Ibm from "../images/IBM/ibm.jpg"
import Jetbrains from "../images/Jetbrains/jetbrains.png"
import Rha from "../images/RedHat/rha.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Parceria1 = props => (
    <table class="parceira1">
        <tbody>
            <tr>
                <td rowSpan="3"><a href={props.site} target="_blank" rel="noopener noreferrer"><img class="logo-par1" src={props.logo} alt="Logo" width={props.larguralogo} height={props.alturalogo} /></a></td>
                <td id={props.empresa} class="titulo-parceira1" colspan="6"><h1>{props.empresa}</h1></td>
            </tr>
            <tr>
                <td colspan="6">
                    <p class="resumo-parceira1">{props.resumo}</p>
                </td>
            </tr>
            <tr class="par-atalhos">
                <td>
                    <details>
                        <summary class="par-redes">Redes Sociais</summary>
                        <table class="tab-redes">
                            <tbody>
                                {props.redesocial}
                            </tbody>
                        </table>
                    </details>
                </td>
            </tr>
        </tbody>
    </table>
)

const Parceria2 = props => (
    <table class="parceira2">
        <tbody>
            <tr>
                <td id={props.empresa} class="titulo-parceira2" colspan="6"><h1>{props.empresa}</h1></td>
                <td rowSpan="3"><a href={props.site} target="_blank" rel="noopener noreferrer"><img class="logo-par1" src={props.logo} alt="Logo" width={props.larguralogo} height={props.alturalogo} /></a></td>
            </tr>
            <tr>
                <td colspan="6">
                    <p class="resumo-parceira2">{props.resumo}</p>
                </td>
            </tr>
            <tr class="par-atalhos">
                <td>
                    <details>
                        <summary class="par-redes">Redes Sociais</summary>
                        <table class="tab-redes">
                            <tbody>
                                {props.redesocial}
                            </tbody>
                        </table>
                    </details>
                </td>
            </tr>
        </tbody>
    </table>
)

export default () =>
    <>
        <Cabecalho />
        <p class="partitulo"><strong>Parcerias Acadêmicas</strong></p>
        <article class="corpo">
            <div class="div-parcerias">
                <Parceria1
                    empresa="ABRAMTI"
                    site="https://www.abramti.org.br/"
                    logo={Abramti}
                    larguralogo="250px"
                    alturalogo="150px"
                    resumo="O Colegiado de Computação firmou parceria com a ABRAMTI (Associação Brasileira de Melhoria em TI) para aplicação de exames de certificação CTFL para testes de software e engenharia de requisitos. Estes exames são de idealização da ISTQB, instituição sediada no Reino Unido, com reconhecimento internacional, representada no Brasil pela BSTQB, componente da ABRAMTI. A UniFil aplica os exames na região de Londrina para a ABRAMTI e, em contrapartida, conta com três indicações para prestar a prova gratuitamente, por data de aplicação."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.linkedin.com/company/abramti/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                        </tr>
                    }
                />
                <br />
                <Parceria2
                    empresa="Bizagi"
                    site="https://www.bizagi.com/?lang=pt"
                    logo={Bizagi}
                    larguralogo="250px"
                    alturalogo="75px"
                    resumo="A Bizagi é uma empresa privada de software criada em 1989 com sede no Reino Unido e escritórios nos EUA, Espanha e América Latina. A Bizagi é reconhecida como a única plataforma que pode realmente ser utilizada tanto em automatizações de processos complexos quanto em processos mais simples em empresas, ajudando empresas a se transformar digitalmente automatizando seus processos."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.facebook.com/bizagi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/bizagi/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/user/Bizagi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            </td>
                            <td>
                                <a href="https://twitter.com/bizagi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </td>
                        </tr>
                    }
                />
                <br />
                <Parceria1
                    empresa="Cisco"
                    site="https://www.cisco.com/c/pt_br/index.html"
                    logo={Cisco}
                    larguralogo="250px"
                    alturalogo="250px"
                    resumo="A Cisco Systems, Inc. é uma companhia transnacional estadunidense sediada em San José, Califórnia.A atividade principal da Cisco é o oferecimento de soluções para redes e comunicações quer seja na fabricação e venda."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.instagram.com/ciscodobrasil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </td>
                            <td>
                                <a href="https://www.facebook.com/CiscoDoBrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/cisco/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/user/ciscoDoBrasilTV" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            </td>
                            <td>
                                <a href="https://twitter.com/CiscoDoBrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </td>
                        </tr>
                    }
                />
                <br />
                <Parceria2
                    empresa="Google"
                    site="https://edu.google.com/intl/pt-BR/?modal_active=none"
                    logo={Google}
                    larguralogo="250px"
                    alturalogo="250px"
                    resumo="O Google é uma empresa multinacional de serviços online e software. O Google for Education é um serviço do Google que fornece versões personalizáveis ​​de forma independente de vários produtos do Google, usando um nome de domínio fornecido pelo cliente."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.instagram.com/google/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </td>
                            <td>
                                <a href="https://www.facebook.com/GoogleBrasil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/google/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/user/googlebrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            </td>
                            <td>
                                <a href="https://twitter.com/googlebrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </td>
                        </tr>
                    }
                />
                <Parceria1
                    empresa="IBM"
                    site="https://www.ibm.com/br-pt"
                    logo={Ibm}
                    larguralogo="250px"
                    alturalogo="250px"
                    resumo="A Instituição participa do programa IBM Academic Initiative, tendo acesso à quase todos os softwares e sistemas da IBM, inclusive os da Rational. O programa também prevê acesso diferenciado e com descontos nos serviços de nuvem da empresa, o Bluemix e Watson, além de acesso remoto à máquinas de grande porte, como mainframes System Z, S/390 e computadores quânticos. Por fim, os acadêmicos ainda têm acesso a documentos, manuais, artigos e cursos sobre tecnologias da empresa."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.instagram.com/ibm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </td>
                            <td>
                                <a href="https://www.facebook.com/IBM/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/ibm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/user/IBM" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            </td>
                            <td>
                                <a href="https://twitter.com/ibmbrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </td>
                        </tr>
                    }
                />
                <br />
                <Parceria2
                    empresa="JetBrains"
                    site="https://www.jetbrains.com/pt-br/"
                    logo={Jetbrains}
                    larguralogo="250px"
                    alturalogo="250px"
                    resumo="JetBrains s.r.o. é uma empresa de desenvolvimento de software cujas ferramentas são direcionadas a desenvolvedores de software e gerentes de projeto.Ajudando desenvolvedores, a automatizar tarefas comuns e repetitivas para permitir que eles permaneçam concentrados no design do código e no panorama geral. A JetBrains também fornece ferramentas para explorar e dominar bases de código com mais rapidez, facilitando a atenção aos níveis de qualidade durante todo o desenvolvimento e reduzindo o tempo gasto com tarefas de manutenção."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.instagram.com/jetbrains/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </td>
                            <td>
                                <a href="https://www.facebook.com/JetBrains" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/jetbrains/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/user/JetBrainsTV" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            </td>
                            <td>
                                <a href="https://twitter.com/jetbrains" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </td>
                        </tr>
                    }
                />
                <br />
                <Parceria1
                    empresa="Red Hat Academy"
                    site="https://www.redhat.com/pt-br/services/training/red-hat-academy"
                    logo={Rha}
                    larguralogo="250px"
                    alturalogo="300px"
                    resumo="O programa Red Hat Academy fornece às instituições acadêmicas toda a infraestrutura do Red Hat Training and Certification para transformá-las em centros de formação de talentos preparados para atuar no mercado corporativo."
                    redesocial={
                        <tr>
                            <td>
                                <a href="https://www.facebook.com/RedHatBrasil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/red-hat/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/user/RedHatVideos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            </td>
                            <td>
                                <a href="https://twitter.com/RedHat" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </td>
                        </tr>
                    }
                />
            </div >
        </article >
        <Rodape />
    </>