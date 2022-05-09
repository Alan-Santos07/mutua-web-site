import React, { Component } from "react";
import '../css/base-style.css';
import '../css/home-style.css'
import '../css/quem-somos.css';

class Cultural extends Component {
    render(){
        return (
            <div className='cards-container flex jc-center flex-column card-principios'>
                <div className='flex flex-column ai-center'>
                    <p id='texto-principios'>A cultura é a matéria-prima por onde se estabelecem conexões sociais, logo é a primeira instância do jogo de relações de poder. Assim, quando valorizarmos a cultura nacional brasileira - não uma cultura nacionalista, onde se procuraria uma ideia de unidade social patriótica- pensamos em nós aproximarmos no dia-a-dia das pessoas daqui, sem procurarmos generalizar a brasilidade por via do estereótipo e senso-comum. Acreditamos que uma boa representação no entretenimento e na arte são um meio para uma mudança estrutural, pois estas ferramentas vitais da vida em sociedade!</p>
                </div>
            </div>
        )
    }
}

export default Cultural;