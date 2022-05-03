import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base-style.css';
import '../assets/css/home-style.css'

import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

//Import das imagens;
import Caipora from '../assets/img/luana_joaninha.jpg';
import Castelo from '../assets/img/mutua_site_castelo_banner.png'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section>
                <Header />
                <section className='banner-section'>
                    <div className='banner-grad'></div>
                    <div className='banner-container flex jc-center ai-center'>
                        <div className='banner-content'>
                            <div className='banner-info'>
                                <h1>Somos a Mutua! se aconchegue...</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className='button-saiba-mais'>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex flex-column ai-center'>
                        <div className='titulo-cards-section flex flex-column ai-center'>
                            <h2>Projetos</h2>
                            <div className='linha'></div>
                        </div>
                        <div className='cards-content flex flex-column ai-center jc-space-btw'>
                            <Link to="eu-sou-caipora">
                                <article class="projects__card">
                                    <img src={Caipora} alt="" class="projects__img" />
                                    <div class="projects__modal">
                                        <div>
                                            <span class="projects__subtitle">Curta Animado</span>
                                            <h3 class="projects__title">Eu Sou Caipora</h3>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                            <Link to="castelo-ra-tim-bum">
                                <article class="projects__card">
                                    <img src={Castelo} alt="" class="projects__img" />
                                    <div class="projects__modal">
                                        <div>
                                            <span class="projects__subtitle">Curta Animado</span>
                                            <h3 class="projects__title">Castelo Ra-Tim-Bum</h3>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex jc-center'>
                        <div className='image-about'>
                            {/* <img></img> */}
                        </div>
                        <div className='text-about'>
                            <p>Somos muito mais do que só um estúdio, venha saber mais sobre o que fazemos, nossos princípios, história e nossa equipe!</p>
                            <button id='segundo-btn' className='button-saiba-mais'>Saiba Mais</button>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        )
    }

}
