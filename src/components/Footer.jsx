import React from 'react'
import { FaInstagram,FaTiktok,FaYoutube,FaTwitter,FaTwitch } from "react-icons/fa";
import LiCon from './LiCon';

import './styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      
        <div className='footer-rrss'>
          <p>Puedes encontrarme en</p>
          <ul>
            <LiCon goto='https://instagram.com/lachowski_tutorials/'><FaInstagram/> Instagram</LiCon>
            <LiCon goto='https://tiktok.com/@lachowski_tutorials'><FaTiktok/> Tik Tok</LiCon>
            <LiCon goto='https://youtube.com/channel/UC2Rg4nOELkGCojl0eIXPp9Q'><FaYoutube/> YouTube</LiCon>
            <LiCon goto='https://twitch.tv/itslachowski'><FaTwitch/> Twitch</LiCon>
            <LiCon goto='https://twitter.com/arepaconhuevo_'><FaTwitter/> Twitter</LiCon>
          </ul>
        </div>


        <div className='footer-links'>
          <p>Tambien te puede interesar</p>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href='/'>Home</a></li>
            <li><a href="/shop">Tienda</a></li>
            <li><a href='/cursos'>Cursos</a></li>
            <li><a href="/colaboraciones">Colaboraciones</a></li>            
          </ul>
        </div>

        <div className='footer-copyright'>
          <p>© 2022-2022 itslachoski. Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer