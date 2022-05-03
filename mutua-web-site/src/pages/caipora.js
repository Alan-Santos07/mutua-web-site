import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base-style.css';
import '../assets/css/home-style.css';
import '../assets/css/eu-sou-caipora.css';

import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

//Import das imagens;
import Luana from '../assets/img/img_luana.jpg';
import Filtro from '../assets/img/caip_recompensas_bgFiltro_001.png';
import Folclore from '../assets/img/folclore_br.png'

export default class CaiporaPage extends Component {
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
                    <div className='cards-container flex flex-column ai-center text-center'>
                        <div>
                            <h2 className='tittle font-ocean'>EU SOU CAIPORA</h2>
                        </div>
                        <div>
                            <p className='text-caipora'>"Eu Sou Caipora: A Menina e o Poder das Matas" é um curta-metragem de animação sobre um dos personagens mais conhecidos do folclore brasileiro. Criado pela Vivárte, o curta, que busca celebrar questões ambientais e socioculturais do país, também conta com a produção do ilustrador e designer Anderson Awvas, realizador do Folclore BR: Uma Nova Visão, projeto dedicado a explorar novas formas de falar sobre o folclore nacional.</p>
                        </div>
                    </div>
                </section>

                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex ai-center text-center flex-wrap jc-space-btw'>
                        <div className='wid-half flex ai-center'>
                            <p className='text-caipora'>A animação conta a história de Luana, uma menina apaixonada pelos animais que vive no interior de São Paulo. Depois de ver seu amigo Quiquinho, um pequeno macaco-prego, capturado por contrabandistas, Luana recorre às histórias de sua avó sobre a lenda de Caipora para salvá-lo.</p>
                        </div>
                        <div className='wid-half flex ai-center'>
                            <img src={Luana} id="luana-img"></img>
                        </div>
                    </div>
                </section>

                <section className='cards-section flex jc-center'>
                    <div className='cards-container flex flex-column ai-center text-center'>
                        <div>
                            <h3 className='sub-tittle font-ocean'>AINDA HÁ MUITO PELA FRENTE</h3>
                        </div>
                        <div>
                            <p className='text-caipora'>Tudo produzido até agora, desde trailers a ilustrações, são apenas protótipos e rascunhos iniciais do que será o curta-metragem.</p>
                        </div>
                    </div>
                </section>

                <section className='galeria-section flex jc-center ai-center'>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" id='galeria-inner'>
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Filtro} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Filtro} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className='d-block w-100' src={Filtro} />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <section className='cards-section flex jc-center flex-column ai-center'>
                    <div className='cards-container flex flex-column ai-center text-center mb-5'>
                        <div className='w-100 flex ai-center jc-center'>
                            <h3 className='sub-tittle font-ocean'>FEITO COM QUEM ENTENDE FOLCLORE</h3>
                        </div>
                        <div className='w-100 flex ai-center jc-center'>
                            <p className='text-caipora'>O projeto está sendo produzido em parceria com o artista Anderson Awvas e seu projeto Folclore BR. O artista ficou bastante conhecido ao fazer uma série de artes que traziam a seguinte provocação "“E se as animações da Disney fossem no Brasil?”.</p>
                        </div>
                    </div>
                    <div className='cards-container flex ai-center text-center flex-wrap jc-space-btw'>
                        <div className='wid-half flex ai-center'>
                            <p className='text-caipora'>O projeto Folclore BR é um movimento de resistência cultural que busca uma nova visão do folclore brasileiro em diálogo com temas da atualidade. A ideia principal do projeto é buscar constantemente por novas maneiras de comunicar sobre folclore através de uma geração de conteúdos diversificados. Lá você encontrará artes adaptando lendas, questões e dilemas da sociedade, game-plays, estudos de referências, bate-papos, vídeos, podcasts e outros materiais que possam ajudar a impulsionar essa corrente do bem cultural.</p>
                        </div>
                        <div className='wid-half flex ai-center'>
                            <img src={Folclore} id="folclore-br"></img>
                        </div>
                    </div>
                </section>

                <section className='cards-section flex jc-center flex-column ai-center'>
                    <div className='cards-container flex flex-column ai-center text-center mb-5'>
                        <div className='w-100 flex ai-center jc-center'>
                            <h3 className='sub-tittle font-ocean'>FINANCIADO COLETIVAMENTE</h3>
                        </div>
                        <div className='w-100 flex ai-center jc-center'>
                            <p className='text-caipora'>Para a produção do projeto foi realizado inicialmente (entre os meses de agosto e outubro de 2020) uma campanha de financiamento coletivo, através da plataforma Catarse. A campanha alcançou números surpreendentes e foi destaque nos principais portais da web, como Jovem Nerd, Site Mundo Negro, Correio Brasiliense, Garotas Geeks, Pixel Show, podcast Sala 1604 entre outros.</p>
                        </div>
                    </div>
                    <div className='w-100 flex ai-center jc-center'>
                        <img src={Filtro} id="catarse-img" ></img>
                    </div>
                </section>

                <section className='cards-section flex jc-center ai-center flex-column'>
                    <div className='cards-container flex flex-column ai-center text-center'>
                        <div className='w-100 flex ai-center jc-center'>
                            <h3 className='sub-tittle font-ocean'>Representatividade na voz original</h3>
                        </div>
                        <div className='w-100 flex ai-center jc-center'>
                            <p className='text-caipora'>No final de 2020, a equipe de produção abriu uma seleção para encontrar mulheres negras que pudessem interpretar as vozes originais das personagens principais da animação e assim foram escolhidas as atrizes Fernanda Ribeiro - que deu voz às fases infantis de personagens marcantes como Rapunzel e Merida - e a atriz e cantora Tânia Viana, que dublou sequências musicais de grandes filmes recentes, como “Moana: Um Mar de Aventuras” (2016) e “O Rei Leão” (2019). Elas irão interpretar as personagens Luana e sua avó Dona Marinete, respectivamente.</p>
                        </div>
                    </div>
                    <div className='w-100 flex ai-center jc-center'>
                        <img src={Filtro} id="dublagem-img"></img>
                    </div>
                </section>
                <Footer />
            </section>
        )
    }

}
