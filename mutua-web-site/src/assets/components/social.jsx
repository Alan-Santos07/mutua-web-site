import React, { Component } from "react";
import '../css/base-style.css';
import '../css/home-style.css';
import '../css/quem-somos.css';

class Social extends Component {
    render() {
        return (
            <div className='cards-container flex jc-center flex-column card-principios'>
                <div className='flex flex-column ai-center'>
                    <p id='texto-principios'>O poder da coletividade e criatividade humana permitiu a criação de sociedades complexas. Mas é inegável que a sociedade atual é resultado de uma construção histórica, um processo permeado de contradições que levou a configuração desigual e aparentemente "imutável". Tal disposição têm em seu cerne problemáticas estruturais que levaram por exemplo a posição periférica do Brasil e a América Latina no globo. Tendo isto em vista, nossos projetos procuram discutir os problemas estruturais em âmbito global e nacional. Compreendemos que por meio da ação coletiva é possível uma transformação!</p>
                </div>
            </div>
        )
    }
}

export default Social;