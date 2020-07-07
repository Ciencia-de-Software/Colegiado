import React from 'react'
import Cabecalho from "../components/cabecalho/cabecalho"
import Rodape from "../components/rodape/rodape"
import Eventos from "../components/eventos/eventos-pag"

export default () =>
<>

    <title>Notícias - Colegiado de Computação</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<Cabecalho />
<div class="pag">
<Eventos />
</div>
<Rodape />

</>