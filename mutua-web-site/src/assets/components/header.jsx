import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/base-style.css';
import '../css/home-style.css'

//Icones das Redes Sociais
import Facebook from '../img/icones/facebook_icone.svg';
import Instagram from '../img/icones/instagram_icone.svg';
import TikTok from '../img/icones/tiktok_icone.svg';
import Twitter from '../img/icones/twitter_icone.svg';
import Discord from '../img/icones/discord_rosa.svg';
import Logo from '../img/icones/logo.svg';

class Header extends Component {

    scrollToTop = async () => {

        // if (window.location.pathname === "https://mutuaestudio.com" ) {
        if (window.location.pathname === "/" ) {
            console.log(window.location.pathname + 'deu true')
            window.scrollTo({top: 800, behavior: 'smooth'});
        } else {
            // document.getElementById("#proj").a = "https://mutuaestudio.com"
            // window.scrollTo({top: 1100, behavior: 'smooth'});
            console.log(window.location.pathname + 'deu else')
            window.location.href = "/"
        }
        
    }

    linkSobre = () => {

        if (window.location.pathname === "/quem-somos" ) {
            console.log(window.location.pathname + 'deu true')
            window.scrollTo({top: 800, behavior: 'smooth'});
        } else {
            // document.getElementById("#proj").a = "https://mutuaestudio.com"
            // window.scrollTo({top: 1100, behavior: 'smooth'});
            console.log(window.location.pathname + 'deu else')
            window.location.href = "/quem-somos"
        }
    }
    
    linkEquipe = () => {

        if (window.location.pathname === "/quem-somos" ) {
            console.log(window.location.pathname + 'deu true')
            window.scrollTo({top: 1650, behavior: 'smooth'});
        } else {
            // document.getElementById("#proj").a = "https://mutuaestudio.com"
            // window.scrollTo({top: 1100, behavior: 'smooth'});
            console.log(window.location.pathname + 'deu else')
            window.location.href = "/quem-somos"
        }
    }

    linkContato = () => {

        if (window.location.pathname === "/" ) {
            console.log(window.location.pathname + 'deu true')
            window.scrollTo({top: 1650, behavior: 'smooth'});
        } else {
            // document.getElementById("#proj").a = "https://mutuaestudio.com"
            // window.scrollTo({top: 1100, behavior: 'smooth'});
            console.log(window.location.pathname + 'deu else')
            window.location.href = "/"
        }
    }

    render(){
        return (
            <header className='flex jc-center'>
                <div className='header-container flex ai-center jc-space-btw'>
                    <div className='image-header'>
                        <Link to="/"><img id="logo-header" src={Logo}/></Link>
                    </div>
                    <div className='nav-header flex ai-center'>
                        <ul className='flex'>
                            <li className='list-item-header' onClick={this.scrollToTop}><a id="proj">Projetos</a></li>
                            <li className='list-item-header' onClick={this.linkSobre}><a id="sobre">Sobre</a></li>
                            <li className='list-item-header' onClick={this.linkEquipe}><a id="equipe">Equipe</a></li>
                            <li className='list-item-header' onClick={this.linkContato}><a id="contato">Contato</a></li>
                            <span class="nav-indicator"></span>
                        </ul>
                    </div>
                    <div className='social-media-header flex ai-center'>
                        <a href='https://fb.com/mutuaoficial' target="_blank"><img className='social-media-icon' src={Facebook}/></a>
                        <a href='https://instagram.com/mutuaoficial/' target="_blank"><img className='social-media-icon' src={Instagram}/></a>
                        <a href='https://tiktok.com/@mutuaoficial' target="_blank"><img className='social-media-icon' src={TikTok}/></a>
                        <a href='https://twitter.com/mutuaoficial' target="_blank"><img className='social-media-icon' src={Twitter}/></a>
                        <a href='https://discord.gg/HRQkj2udZP' target="_blank"><img className='social-media-icon' src={Discord}/></a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;