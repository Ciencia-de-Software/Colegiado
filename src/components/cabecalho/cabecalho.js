import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

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
                                    <li>Cursos</li>
                                    <ul>
                                            <li><a href="https://unifil.br/portal/graduacao/exatas/ciencia-da-computacao" target="_blank" rel="noopener noreferrer">Ciência da Computação</a></li>
                                            <li><a href="https://unifil.br/portal/graduacao/exatas/engenharia-de-software" target="_blank" rel="noopener noreferrer">Eng. de Software</a></li>
                                        </ul>
                                    </li>
                                    <li><strong>Área do Aluno</strong>
                                    <ul>
                                            <li><a href="https://unifil.br/portal/institucional/bibliotecas/nossas-bibliotecas#tab-" target="_blank" rel="noopener noreferrer">Modelos de Documentos</a></li>
                                            <li><a href="http://portal.filadelfia.br:7778/portal/pls/portal/PORTAL_APP.ACESSO_AOS_PORTAIS.LOGIN" target="_blank" rel="noopener noreferrer">Portal do Estudante</a></li>
                                        </ul>
                                    </li>
                                    <li><strong>Projetos</strong>
                                    <ul>
                                            <li><Link to="/projetos/npi/">NPI</Link></li>
                                            <li><a href="https://www.unifil.br/portal/institucional/servicos/programa-aplicativo-fiscal" target="_blank" rel="noopener noreferrer">PAF-ECF</a></li>
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