import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base-style.css';
import '../assets/css/home-style.css'

import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

//Import das imagens;
import Caipora from '../assets/img/eu_sou_caipora_banner.png';
import Castelo from '../assets/img/mutua_site_castelo_banner.png'
import Logo from '../assets/img/icones/logo.svg';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    saibaMais = () => {
        window.location.href = "/quem-somos"
    }

    render() {
        return (
            <section>
                <Header />
                <section className='banner-section'>
                    <div className='banner-grad'></div>
                    <div className='banner-container flex jc-center ai-center'>
                        <div className='banner-content flex jc-space-btw'>
                            <div className='w-50 flex ai-center jc-center'>
                                <img className='logo' src={Logo}></img>
                            </div>
                            <div className='banner-info w-50 flex flex-column'>
                                <h1>Somos a Mutua! se aconchegue...</h1>
                                <p>Somos muito mais do que só um estúdio, venha saber mais sobre o que fazemos, nossos princípios, história e nossa equipe!</p>
                                <button onClick={this.saibaMais} className='button-saiba-mais'>Saiba Mais</button>
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
                                            <span class="projects__subtitle">Filme em animação</span>
                                            <h3 class="projects__title">Eu Sou Caipora: A Menina e o Poder das Matas</h3>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                            <Link to="castelo-ra-tim-bum">
                                <article class="projects__card">
                                    <img src={Castelo} alt="" class="projects__img" />
                                    <div class="projects__modal">
                                        <div>
                                            <span class="projects__subtitle">Projeto não oficial</span>
                                            <h3 class="projects__title">Castelo Rá-Tim-Bum</h3>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex jc-center flex-column'>
                        <div className='flex flex-column ai-center'>
                            <h2 id='titulo-contato' className='tittle font-ocean'>Fala com a gente!</h2>
                            <p id='texto-contato'>Se precisar falar com a gente, entre em contato através do e-mail:</p>
                        </div>
                        <div className='flex jc-center ai-center'>
                            <i id='icone-mail' className="fa-solid fa-envelope"></i>
                            <p id='email-texto' >contato@mutuaestudio.com</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        )
    }

}
