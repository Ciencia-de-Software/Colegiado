import React from "react"
import Cabecalho from "../components/cabecalho/cabecalho"
import Eventos from "../components/eventos/eventos"
import Rodape from "../components/rodape/rodape"

export default () =>
    <>
    <title>Colegiado de Computação - UniFil</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <Cabecalho />
        <div class="pag">
            <p class="titulo-index"><strong class="titulo-comp">Colegiado de Computação</strong></p>
            <article class="corpo">
                <div class="areaeventos">
                    <Eventos />
                </div>
            </article>
        </div>
        <Rodape />
    </>