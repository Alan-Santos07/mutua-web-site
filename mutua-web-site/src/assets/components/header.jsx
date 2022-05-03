import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/base-style.css';
import '../css/home-style.css'

//Icones das Redes Sociais
import Facebook from '../img/facebook_icone.svg';
import Instagram from '../img/instagram_icone.svg';
import TikTok from '../img/tiktok_icone.svg';
import Twitter from '../img/twitter_icone.svg';

class Header extends Component {
    render(){
        return (
            <header className='flex jc-center'>
                <div className='header-container flex ai-center jc-space-btw'>
                    <div className='image-header'>
                        <img src=''/>
                    </div>
                    <div className='nav-header flex ai-center'>
                        <ul className='flex'>
                            <li className='list-item-header'><a>Projetos</a></li>
                            <Link to="quem-somos" ><li className='list-item-header'><a>Sobre</a></li></Link>
                            <li className='list-item-header'><a>Equipe</a></li>
                            <li className='list-item-header'><a>Contato</a></li>
                            <li className='list-item-header'><a>Loja</a></li>
                            <span class="nav-indicator"></span>
                        </ul>
                    </div>
                    <div className='social-media-header flex ai-center'>
                        <a href='https://fb.com/mutuaoficial' target="_blank"><img className='social-media-icon' src={Facebook}/></a>
                        <a href='https://instagram.com/mutuaoficial/' target="_blank"><img className='social-media-icon' src={Instagram}/></a>
                        <a href='https://tiktok.com/@mutuaoficial' target="_blank"><img className='social-media-icon' src={TikTok}/></a>
                        <a href='https://twitter.com/mutuaoficial' target="_blank"><img className='social-media-icon' src={Twitter}/></a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;