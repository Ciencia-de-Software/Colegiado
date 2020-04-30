import React from "react"
import Cabecalho from "../../components/cabecalho/cabecalho"
import Rodape from "../../components/rodape/rodape"

export default () =>
    <>
        <Cabecalho />
        <div class="pag">
        <article class="corpo">
            <div class="titulo-pagina-paf">
                Programa Aplicativo Fiscal–Emissor Cupom Fiscal (PAF-ECF)
        </div>
            <div class="conteudo-paf">
                <p>
                    O PAF-ECF é o Programa Aplicativo Fiscal - Emissor Cupom Fiscal. Até recentemente cada estado definia como o Aplicativo Fiscal deveria atuar com o ECF.
                    Finalmente depois de toda a discussão juntamente com as entidades o Fisco publicou 2 documentos contendo as informações para análise do PAF-ECF, que é o Ato Cotepe 06/08 e o Convênio ICMS 15/08.
                    Estes documentos são de abrangência nacional, quer dizer, todas as empresas desenvolvedoras de sistema ECF deverão atendê-los.
            </p>
                <p>
                    O programa foi desenvolvido para possibilitar o envio de comandos ao software básico do ECF, sem capacidade de alterá-lo ou ignorá-lo.
            </p>
                <p>
                    Também estabelece regras e requisitos para os Aplicativos Comerciais seja Frente-de-Loja seja de Gestão.
                    Com estas regras alguns comportamentos do PAF-ECF são padronizados, e a sonegação fica mais difícil de ser realizada através dos aplicativos.
            </p>
                <p>
                    É isto mesmo, a partir de agora todos os aplicativos de ECF,
                    precisam passar por uma análise funcional por órgão técnico credenciado pelo COTEPE/ICMS,
                    obtendo um Laudo de Análise Funcional de PAF-ECF , onde a UniFil está preparada para fazê-lo,
                    e com este em mãos poderá solicitar registro em cada unidade federada, e conforme a legislação de cada estado,
                    semelhante ao que é feito com o ECF, por exemplo.
            </p>
                <p>
                    Há regras definidas para diversos ramos de atividade, conforme suas peculiaridades, como por exemplo:
                    postos de combustíveis, bares, restaurantes, farmácias de manipulação, oficina de consertos e transportes.
            </p>
                <p>
                    Além das definições acima relacionadas, considera-se ainda,
                    as demais definições previstas em Convênio que estabelece requisitos técnicos para o equipamento ECF,
                    celebrado pelo Conselho Nacional de Política Fazendária (CONFAZ).
            </p>
            </div>
            <div class="titulo-table-paf">
                Empresas Homologadas
        </div>
            <table class="table-empresas-paf">
                <tr>
                    <th>
                        EMPRESA
                </th>
                    <th>
                        CIDADE
                </th>
                    <th>
                        ANO
                </th>
                    <th>
                        LAUDO
                </th>
                </tr>
                <tr>
                    <td class="empresa">
                        ARANDU SISTEMAS
                </td>
                    <td class="cidade">
                        LONDRINA - PR
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0012009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        AUTOMATIZA CONSULTORIA E SISTEMAS LTDA
                </td>
                    <td class="cidade">
                        LONDRINA - PR
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0082009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        CELTA SISTEMAS LTDA ME
                </td>
                    <td class="cidade">
                        CLAUDIA - MT
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0232009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        CHENIA INFORMÁTICA S/S LTDA
                </td>
                    <td class="cidade">
                        CIANORTE - PR
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0102009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        CONNECTUS DESENVOLVIMENTO DE SOFTWARE LTDA
                </td>
                    <td class="cidade">
                        MARINGÁ - PR
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0022009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        CS COMERCIO COMERCIO DE INFORMÁTICA LTDA
                </td>
                    <td class="cidade">
                        REALEZA - PR
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0092009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        DELSOFT SISTEMAS LTDA
                </td>
                    <td class="cidade">
                        RIO DO SUL - SC
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0192009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        G.P. MAGRI INFORMÁTICA-EPP
                </td>
                    <td class="cidade">
                        PRESIDENTE PRUDENTE - SP
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0182009
                </td>
                </tr>
                <tr>
                    <td class="empresa">
                        SIGHA EQUIPAMENTOS E SERVIÇOS DE INFORMATICA LTDA
                </td>
                    <td class="cidade">
                        MARECHAL CANDIDO RONDON - PR
                </td>
                    <td class="ano">
                        2009
                </td>
                    <td class="laudo">
                        IFL0142009
                </td>
                </tr>
            </table>
            <div class="paginas-table-paf">
                <button>
                    <i class='fas fa-angle-left'></i>
                </button>
                <span class="pagina-um">
                    1
            </span>
                <span>
                    2
            </span>
                <span>
                    3
            </span>
                <span>
                    ...
            </span>
                <button>
                    <i class='fas fa-angle-right'></i>
                </button>
            </div>
            <div class="contatos-paf">
                Contatos
        </div>
            <ul class="dados-do-paf">
                <li>
                    <i class='far fa-envelope'></i>
                paf.ecf@unifil.br
            </li>
                <li>
                    <i class='fas fa-home'></i>
                Av. Juscelino Kubitschek, nº 1626 - Centro
            </li>
                <li>
                    <i class='fas fa-phone-alt'></i>
                43 3375 7326
            </li>
            </ul>
            </article>
        </div>
        <Rodape />
    </>