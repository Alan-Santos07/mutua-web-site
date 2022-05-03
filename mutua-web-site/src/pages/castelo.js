import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base-style.css';
import '../assets/css/home-style.css';
import '../assets/css/eu-sou-caipora.css';
import '../assets/css/castelo.css'

import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

//Import das imagens;
import Luana from '../assets/img/img_luana.jpg';
import Castelo from '../assets/img/mutua_site_castelo_banner.png'

export default class CasteloPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className='flex flex-column ai-center'>
                <Header />
                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex flex-column ai-center text-center mb-5'>
                        <div className='w-100 flex ai-center jc-center mb-5'>
                            <h2 className='tittle font-ocean'>Castelo</h2>
                        </div>
                        <div className='w-100 flex ai-center jc-center mb-5'>
                            <p className='text-caipora'>O projeto de animação (não oficial) do programa infantil  "Castelo Rá-Tim-Bum", da TV Cultura, se iniciou através de uma fã-arte criada por nossa equipe em 2020. O trabalho, somente em nossas páginas, atingiu mais de 480 mil visualizações e aproximadamente 6 mil compartilhamentos no Facebook. Além disso, o mesmo também foi publicado em diversos outros meios, como o blog Garotas Geek, DesignerNerd, etc.</p>
                        </div>
                        <div className='w-100 flex ai-center jc-center mb-5'>
                            <p className='text-caipora'>HÚMUS: Na época de lançamento da arte, a Mutua era conhecida também como Húmus, por isso na versão mais antiga da arte você encontrará este nome e não o nome atual do estúdio.</p>
                        </div>
                        <div className='w-100 flex ai-center jc-center mb-5'>
                            <img src={Castelo} id="img-castelo"></img>
                        </div>
                    </div>
                </section>
                <section className='cards-section flex jc-center'>
                    <h1 className='tittle font-ocean'>Vem ai...</h1>
                </section>
                <Footer />
            </section>
        )
    }

}
