import React, { Component } from "react";
import '../css/base-style.css';
import '../css/home-style.css'
import '../css/quem-somos.css';

class Ambiental extends Component {
    render(){
        return (
            <div className='cards-container flex jc-center flex-column card-principios'>
                <div className='flex flex-column ai-center'>
                    <p id='texto-principios'>A humanidade é parte inseparável da natureza. Logo, a vida urbana moderna não pode subordiná-la a seu favor. Pensando nisso, nossos projetos procuram apresentar as iminentes catástrofes climáticas e a necessidade de proteger a biodiversidade do planeta. Precisamos pensar e mudar nossas práticas com o meio ambiente com urgência!</p>
                </div>
            </div>
        )
    }
}

export default Ambiental;