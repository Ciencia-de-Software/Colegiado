import React from "react"
import Cabecalho from "../components/cabecalho/cabecalho"
import Rodape from "../components/rodape/rodape"
import Abramti from "../images/ABRAMTI/abramti.png"
import IconAbramti from "../images/Navegação/abramti.png"
import Bizagi from "../images/Bizagi/bizagi.png"
import IconBizagi from "../images/Navegação/bizagi.png"
import Cisco from "../images/CISCO/cisco.png"
import IconCisco from "../images/Navegação/cisco.png"
import Google from "../images/Google/google.png"
import IconGoogle from "../images/Navegação/google.png"
import Ibm from "../images/IBM/ibm.jpg"
import IconIbm from "../images/Navegação/ibm.jpg"
import Jetbrains from "../images/Jetbrains/jetbrains.png"
import IconJetbrains from "../images/Navegação/jetbrains.png"
import Rha from "../images/RedHat/rha.jpg"
import IconRha from "../images/Navegação/rha.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Parceria1 = props => (
    <table class="parceira1">
        <tbody>
            <tr>
                <td rowSpan="3"><a href={props.site} target="_blank" rel="noopener noreferrer"><img class="logo-par" src={props.logo} alt="Logo" width={props.larguralogo} height={props.alturalogo} /></a></td>
                <td id={props.empresaId}><p class="titulo-parceira1"><h1>{props.empresa}</h1></p></td>
            </tr>
            <tr>
                <td class="resumo-parceira1">
                    {props.resumo}
                </td>
            </tr>
            <tr class="par-atalhos1">
                {props.redesocial}
            </tr>
        </tbody>
    </table>
)

const Parceria2 = props => (
    <table class="parceira2">
        <tbody>
            <tr>
                <td id={props.empresaId}><p class="titulo-parceira2"><h1>{props.empresa}</h1></p></td>
                <td rowSpan="3"><a href={props.site} target="_blank" rel="noopener noreferrer"><img class="logo-par" src={props.logo} alt="Logo" width={props.larguralogo} height={props.alturalogo} /></a></td>
            </tr>
            <tr>
                <td class="resumo-parceira2">
                    {props.resumo}
                </td>
            </tr>
            <tr class="par-atalhos2">
                {props.redesocial}
            </tr>
        </tbody>
    </table>
)

export default () =>
    <>
        <Cabecalho />
        <p class="partitulo"><h1><strong>Parcerias Acadêmicas</strong></h1></p>
        <br />
        <nav class="navegação">
                <a href="#abramti"><span class="nav1"><img src={IconAbramti} alt=""/></span></a>
                <a href="#bizagi"><span class="nav2"><img src={IconBizagi} alt=""/></span></a>
                <a href="#cisco"><span class="nav3"><img src={IconCisco} alt=""/></span></a>
                <a href="#google"><span class="nav4"><img src={IconGoogle} alt=""/></span></a>
                <a href="#ibm"><span class="nav5"><img src={IconIbm} alt=""/></span></a>
                <a href="#jetbrains"><span class="nav6"><img src={IconJetbrains} alt=""/></span></a>
                <a href="#rha"><span class="nav7"><img src={IconRha} alt=""/></span></a>
        </nav>
        <div class="div-parcerias">
            <Parceria1
                empresa="ABRAMTI"
                empresaId="abramti"
                site="https://www.abramti.org.br/"
                logo={Abramti}
                larguralogo="350px"
                alturalogo="210px"
                resumo={
                    <>
                    <p>O Colegiado de Computação firmou parceria com a ABRAMTI (Associação Brasileira de Melhoria em TI) para aplicação de exames de certificação CTFL para testes de software e engenharia de requisitos.</p>
                    <p>Estes exames são de idealização da ISTQB, instituição sediada no Reino Unido, com reconhecimento internacional, representada no Brasil pela BSTQB, componente da ABRAMTI.</p>
                    <p>A UniFil aplica os exames na região de Londrina para a ABRAMTI e, em contrapartida, conta com três indicações para prestar a prova gratuitamente, por data de aplicação.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.linkedin.com/company/abramti/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                </td>
                }
            />
            <Parceria2
                empresa="Bizagi"
                empresaId="bizagi"
                site="https://www.bizagi.com/?lang=pt"
                logo={Bizagi}
                larguralogo="350px"
                alturalogo="125px"
                resumo={
                    <>
                    <p>A Bizagi é uma empresa privada de software criada em 1989 com sede no Reino Unido e escritórios nos EUA, Espanha e América Latina.</p>
                    <p>A Bizagi é reconhecida como a única plataforma que pode realmente ser utilizada tanto em automatizações de processos complexos quanto em processos mais simples em empresas, ajudando empresas a se transformar digitalmente automatizando seus processos.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.facebook.com/bizagi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                    <a href="https://www.linkedin.com/company/bizagi/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.youtube.com/user/Bizagi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                    <a href="https://twitter.com/bizagi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </td>
                }
            />
            <Parceria1
                empresa="Cisco"
                empresaId="cisco"
                site="https://www.cisco.com/c/pt_br/index.html"
                logo={Cisco}
                larguralogo="350px"
                alturalogo="350px"
                resumo={
                    <>
                    <p>A Cisco Systems, Inc. é uma companhia transnacional estadunidense sediada em San José, Califórnia.</p>
                    <p>A atividade principal da Cisco é o oferecimento de soluções para redes e comunicações quer seja na fabricação e venda.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.instagram.com/ciscodobrasil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="https://www.facebook.com/CiscoDoBrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                    <a href="https://www.linkedin.com/company/cisco/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.youtube.com/user/ciscoDoBrasilTV" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                    <a href="https://twitter.com/CiscoDoBrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </td>
                }
            />
            <Parceria2
                empresa="Google"
                empresaId="google"
                site="https://edu.google.com/intl/pt-BR/?modal_active=none"
                logo={Google}
                larguralogo="350px"
                alturalogo="350px"
                resumo={
                    <>
                    <p>Google LLC é uma empresa multinacional de serviços online e software dos Estados Unidos, que hospeda e desenvolve uma série de serviços e produtos baseados na internet e gera lucro principalmente através da publicidade pelo AdWords.</p>
                    <p>O Google for Education é um serviço do Google que fornece versões personalizáveis ​​de forma independente de vários produtos do Google, usando um nome de domínio fornecido pelo cliente.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.instagram.com/google/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="https://www.facebook.com/GoogleBrasil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                    <a href="https://www.linkedin.com/company/google/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.youtube.com/user/googlebrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                    <a href="https://twitter.com/googlebrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </td>
                }
            />
            <Parceria1
                empresa="IBM"
                empresaId="ibm"
                site="https://www.ibm.com/br-pt"
                logo={Ibm}
                larguralogo="350px"
                alturalogo="350px"
                resumo={
                    <>
                    <p>A Instituição participa do programa IBM Academic Initiative, tendo acesso à quase todos os softwares e sistemas da IBM, inclusive os da Rational.</p>
                    <p>O programa também prevê acesso diferenciado e com descontos nos serviços de nuvem da empresa, o Bluemix e Watson, além de acesso remoto à máquinas de grande porte, como mainframes System Z, S/390 e computadores quânticos.</p>
                    <p>Por fim, os acadêmicos ainda têm acesso a documentos, manuais, artigos e cursos sobre tecnologias da empresa.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.instagram.com/ibm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="https://www.facebook.com/IBM/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                    <a href="https://www.linkedin.com/company/ibm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.youtube.com/user/IBM" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                    <a href="https://twitter.com/ibmbrasil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </td>
                }
            />
            <Parceria2
                empresa="JetBrains"
                empresaId="jetbrains"
                site="https://www.jetbrains.com/pt-br/"
                logo={Jetbrains}
                larguralogo="350px"
                alturalogo="350px"
                resumo={
                    <>
                    <p>JetBrains s.r.o. é uma empresa de desenvolvimento de software cujas ferramentas são direcionadas a desenvolvedores de software e gerentes de projeto.</p>
                    <p>Ajudando desenvolvedores, a automatizar tarefas comuns e repetitivas para permitir que eles permaneçam concentrados no design do código e no panorama geral.</p>
                    <p>A JetBrains também fornece ferramentas para explorar e dominar bases de código com mais rapidez, facilitando a atenção aos níveis de qualidade durante todo o desenvolvimento e reduzindo o tempo gasto com tarefas de manutenção.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.instagram.com/jetbrains/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="https://www.facebook.com/JetBrains" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                    <a href="https://www.linkedin.com/company/jetbrains/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.youtube.com/user/JetBrainsTV" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                    <a href="https://twitter.com/jetbrains" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </td>
                }
            />
            <Parceria1
                empresa="Red Hat Academy"
                empresaId="rha"
                site="https://www.redhat.com/pt-br/services/training/red-hat-academy"
                logo={Rha}
                larguralogo="350px"
                alturalogo="420px"
                resumo={
                    <>
                    <p>O programa Red Hat Academy fornece às instituições acadêmicas toda a infraestrutura do Red Hat Training and Certification para transformá-las em centros de formação de talentos preparados para atuar no mercado corporativo.</p>
                    </>
                }
                redesocial={
                <td>
                    <a href="https://www.facebook.com/RedHatBrasil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>        
                    <a href="https://www.linkedin.com/company/red-hat/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.youtube.com/user/RedHatVideos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>   
                    <a href="https://twitter.com/RedHat" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </td>     
                }
            />
        </div >
        <Rodape />
    </>