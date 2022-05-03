import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base-style.css';
import '../assets/css/home-style.css';
import '../assets/css/eu-sou-caipora.css';
import '../assets/css/castelo.css'
import '../assets/css/quem-somos.css'

import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

//Import das imagens;
import Luana from '../assets/img/img_luana.jpg';
import Castelo from '../assets/img/mutua_site_castelo_banner.png'
import Filtro from '../assets/img/caip_recompensas_bgFiltro_001.png';

export default class QuemSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className='flex flex-column ai-center'>
                <Header />
                <section className='cards-section flex jc-center ai-center flex-column'>
                    <h1 className='tittle font-ocean'>Quem Somos?</h1>
                    <div className='cards-container flex ai-center text-center flex-wrap jc-space-btw'>
                        <div className='wid-half flex ai-center'>
                            <img src={Filtro} id="luana-img"></img>
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
                        <h1 className='tittle font-ocean'>Valores</h1>
                        <div id="accordion" className='w-50'>
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
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
                        <div className="equipe flex jc-space-btw flex-wrap">
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="fotinha projects__card">
                                <img src={Luana}></img>
                                <div class="projects__modal" id='ajuste-foto'>
                                    <div>
                                        <span class="projects__subtitle">Curta Animado</span>
                                        <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center flex-column ai-center'>
                    <div className='cards-container flex flex-column ai-center text-center mb-3'>
                        <div className='w-100 flex ai-center jc-center'>
                            <h3 className='sub-tittle font-ocean'>QUER FAZER PARTE DESSA JORNADA?</h3>
                        </div>
                        <div className='w-50 flex ai-center jc-center'>
                            <p className='text-caipora'>entre em contato com seu portófilio e conte para gente porque você gostaria de fazer parte da Mutua!</p>
                        </div>
                    </div>
                    <button class="button-saiba-mais" id='btn-vivart-cont'>
                        Entre em Contato
                    </button>
                </section>
                <Footer />
            </section>
        )
    }

}
