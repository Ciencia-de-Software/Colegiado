import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import "./cabecalho.css"

export default () =>
    <>
        <div>
            <table class="cabeca">
                <tbody>
                    <tr>
                        <td class="logo"><Link to="/"><img src={Logo} alt="Logo UniFil/Computação" width="100%" /></Link></td>
                        <td class="tdmenu">
                            <nav class="menu">
                                <ul>
                                    <li><strong>Cursos</strong>
                                    <ul>
                                            <li><a href="https://unifil.br/portal/graduacao/exatas/ciencia-da-computacao" target="_blank" rel="noopener noreferrer">Ciência da Computação</a></li>
                                            <li><a href="https://unifil.br/portal/graduacao/exatas/engenharia-de-software" target="_blank" rel="noopener noreferrer">Eng. de Software</a></li>
                                        </ul>
                                    </li>
                                    <li><strong>Área do Aluno</strong>
                                    <ul>
                                            <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj-qaep9oTrAhW_HbkGHf85DuMQFjACegQIARAB&url=https%3A%2F%2Fwww.unifil.br%2Fportal%2Fimages%2Fpdf%2Fbiblioteca%2Fmodelo-de-trabalho-unifil-pos-graduacao.doc&usg=AOvVaw3GxgNTh4lMQhVVxu75h_ER" target="_blank" rel="noopener noreferrer">Modelos de Trabalhos</a></li>
                                            <li><a href="http://portal.filadelfia.br:7778/portal/pls/portal/PORTAL_APP.ACESSO_AOS_PORTAIS.LOGIN" target="_blank" rel="noopener noreferrer">Portal do Estudante</a></li>
                                        </ul>
                                    </li>
                                    <li><strong>Projetos</strong>
                                    <ul>
                                            <li><Link to="/projetos/npi/">NPI</Link></li>
                                            <li><a href="https://unifil.br/servicos-a-comunidade/programa-aplicativo-fiscal/" target="_blank" rel="noopener noreferrer">PAF-ECF</a></li>
                                        </ul>
                                    </li>
                                    <li><strong><Link to="/parceirias/">Parcerias</Link></strong></li>
                                </ul>
                            </nav>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>