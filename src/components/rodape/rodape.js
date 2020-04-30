import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Logo2 from "../../images/logo2.png"

library.add(fab)

export default () =>
    <>
        <div class="rodape">
            <div class="logo2">
                <img src={Logo2} alt="Logo UniFil"></img>
            </div>
            <div class="endereco">
                <p>Av. Juscelino Kubitschek, 1626, Londrina-PR, CEP:86.020-000 | Fone:<a href="tel:43 3375 7474">43 3375 7474</a></p>
            </div>
            <div class="redes">
                <p>
                    <a href="https://www.instagram.com/computacaounifil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                    <span class="espaco"></span>
                    <a href="https://www.facebook.com/ComputacaoUnifil/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']}/></a>
                    <span class="espaco"></span>
                    <a href="https://www.youtube.com/user/unifillondrina" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                </p>
            </div>
            <div class="develops">
                <p>Desenvolvido por: <a class="edu" href="https://github.com/dudulacerdadl" target="_blank" rel="noopener noreferrer">Eduardo Lacerda</a> e <a class="ana" href="https://github.com/daisyblue707" target="_blank" rel="noopener noreferrer">Ana Kataoka</a></p>
            </div>
        </div>
    </>