import React, { Component } from "react";
import '../css/base-style.css';
import '../css/home-style.css'

//Icones das Redes Sociais
import Facebook from '../img/icones/facebook_icone.svg';
import Instagram from '../img/icones/instagram_icone.svg';
import TikTok from '../img/icones/tiktok_icone.svg';
import Twitter from '../img/icones/twitter_icone.svg';
import Discord from '../img/icones/discord_rosa.svg';

class Header extends Component {
    render(){
        return (
            <footer className='cards-section flex jc-center ai-center'>
                    <div className='footer-content cards-container flex flex-column ai-center jc-space-eve'>
                        <div className='flex ai-center'>
                            <a href='https://fb.com/mutuaoficial' target="_blank"><img className='social-media-icon' src={Facebook}/></a>
                            <a href='https://instagram.com/mutuaoficial/' target="_blank"><img className='social-media-icon' src={Instagram}/></a>
                            <a href='https://tiktok.com/@mutuaoficial' target="_blank"><img className='social-media-icon' src={TikTok}/></a>
                            <a href='https://twitter.com/mutuaoficial' target="_blank"><img className='social-media-icon' src={Twitter}/></a>
                            <a href='https://discord.gg/HRQkj2udZP' target="_blank"><img className='social-media-icon' src={Discord}/></a>
                        </div>
                        <p className='textinho-footer'>© 2022 Mutua, Inc. Todos os direitos reservados.</p>
                    </div>
            </footer>
        )
    }
}

export default Header;