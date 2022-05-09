import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base-style.css';
import '../assets/css/home-style.css';
import '../assets/css/eu-sou-caipora.css';
import '../assets/css/castelo.css'
import '../assets/css/quem-somos.css'

import Header from "../assets/components/header";
import Footer from "../assets/components/footer";
import Social from "../assets/components/social";

//Import das imagens;
import Filtro from '../assets/img/caip_recompensas_bgFiltro_001.png';
import Flavia from '../assets/img/equipe/flavia.png'
import Iara from '../assets/img/equipe/iara.png'
import Leo from '../assets/img/equipe/leo.png'
import Natan from '../assets/img/equipe/natan.png'
import Roger from '../assets/img/equipe/roger.png'
import Thibiz from '../assets/img/equipe/thibiz.png'

export default class QuemSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrasTelas : 0,
        }
    }

    bolinhaAnimation = () => {
        const bola = document.getElementById('bolinha')
        bola.classList.remove('movimento-volta')
        bola.classList.add('movimento-ida')

        const fundo = document.getElementById('btn-social')
        fundo.classList.add('fundinho-um')

        const retira = document.getElementById('btn-social')
        retira.classList.remove('fundinho-dois')
    }

    voltarBolinha = () => {
        const bola = document.getElementById('bolinha')
        bola.classList.remove('movimento-ida')
        bola.classList.add('movimento-volta')

        const fundo = document.getElementById('btn-ambiental')
        fundo.classList.remove('fundinho-um')
        fundo.classList.add('fundinho-dois')

        const retira = document.getElementById('btn-ambiental')
        retira.classList.remove('fundinho-um')
    }

    mudançaSocial = () => {
        this.setState({mostrasTelas : 0})
        this.voltarBolinha()
    }

    mudançaAmbiental = () => {
        this.setState({mostrasTelas : 1})
        this.bolinhaAnimation()
    }

    mudançaCultural = () => {
        this.setState({mostrasTelas : 2})
        this.bolinhaAnimation()
    }

    render() {
        return (
            <section className='flex flex-column ai-center'>
                <Header />
                <section className='cards-section flex jc-center ai-center flex-column'>
                    <h1 className='tittle font-ocean'>Quem Somos?</h1>
                    <div className='cards-container flex ai-center text-center flex-wrap jc-space-btw'>
                        <div className='wid-half flex ai-center'>
                            <img src={Filtro} id="filtro-img"></img>
                        </div>
                        <div className='wid-half flex ai-center flex-column'>
                            <p className='text-caipora'>Somos um estúdio audiovisual da Zona Leste de São Paulo. Mesmo com uma equipe  jovem, nos tornamos pioneiros em animação independente e  realizada através de financiamento coletivo no país.</p>
                            <p className='text-caipora'>Nosso maior propósito  é produzir arte que cria esperança e inspira as pessoas. Esperança de que o mundo pode ser um lugar melhor, e inspiração para resistir e lutar por isso.</p>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center flex-column ai-center'>
                    <div className='cards-container flex flex-column ai-center jc-center text-center mb-3'>
                        <button class="button-saiba-mais" id='btn-vivart' type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            E a Vivárte?
                        </button>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body w-50" id='vivart'>
                                <p className='text-caipora' id='mb-0'>Você talvez já nos conhemia como Vivárte, mas em março de 2022 trocamos de nome, agora somos Mutua! Mesmo com a mudança, somos a mesma equipe com os mesmos sonhos.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center flex-column ai-center'>
                    <div className='cards-container flex flex-column ai-center jc-center text-center mb-3'>
                        <div>
                            <h1 className='tittle font-ocean'>Princípios</h1>
                        </div>
                        <div className='flex ai-center jc-space-btw w-80'>
                            <button class="button-saiba-mais" id='btn-social' type="button" onClick={this.mudançaSocial}>
                                Social
                            </button>
                            <button class="button-saiba-mais" id='btn-ambiental' type="button" onClick={this.mudançaAmbiental}>
                                Ambiental
                            </button>
                            <button class="button-saiba-mais" id='btn-cultural' type="button" onClick={this.mudançaCultural}>
                                Cultural
                            </button>
                        </div>
                        <div className='w-80 flex ai-flex-start'>
                            <div id="bolinha" className="bolinha "></div>
                        </div>
                    </div>
                    <div className='cards-container flex flex-column ai-center jc-center text-center mb-3'>
                        <div className='cards-container flex flex-column ai-center jc-center text-center mb-3'>
                            <Social />
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center flex-column ai-center'>
                    <div className='cards-container flex flex-column ai-center jc-center text-center mb-3'>
                        <h1 className='tittle font-ocean'>Valores</h1>
                        <div id="accordion" className='w-50'>
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link font-ocean" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Diversidade
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body centrinho">
                                        Respeitamos e representamos a diversidade da vida! Nossa equipe e projetos são um espelho deste aspecto.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link font-ocean collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Coletividade
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body centrinho">
                                        Juntos somos mais fortes! Interesses individuais não se sobrepõem à vontade coletiva.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link font-ocean collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Esperança
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body centrinho">
                                        Somos completamente opostos a uma postura derrotista. Mesmo com todas as dificuldades, acreditamos verdadeiramente numa mudança!
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFour">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link font-ocean collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Empatia
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div class="card-body centrinho">
                                        Uma organização empática é central para que o trabalho em equipe seja eficiente e saudável!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex flex-column ai-center text-center mb-3'>
                        <h1 className='tittle font-ocean'>Equipe</h1>
                        <div className="equipe">
                            <div class="fotinha projects__card_equipe">
                                <img src={Thibiz}></img>
                            </div>
                            <div class="fotinha projects__card_equipe">
                                <img src={Iara}></img>
                            </div>
                            <div class="fotinha projects__card_equipe">
                                <img src={Roger}></img>
                            </div>
                            <div class="fotinha projects__card_equipe">
                                <img src={Natan}></img>
                            </div>
                            <div class="fotinha projects__card_equipe">
                                <img src={Leo}></img>
                            </div>
                            <div class="fotinha projects__card_equipe">
                                <img src={Flavia}></img>
                            </div>
                            {/* <div class="fotinha projects__card_equipe">
                                <img src={Luana}></img>
                            </div>
                            <div class="fotinha projects__card_equipe">
                                <img src={Luana}></img>
                            </div> */}
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        )
    }

}
