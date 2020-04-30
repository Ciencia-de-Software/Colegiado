import React from "react"
import Cabecalho from "../components/cabecalho/cabecalho"
import Eventos from "../components/eventos/eventos"
import Rodape from "../components/rodape/rodape"

export default () =>
    <>
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