import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Menu/Menu.module.css'
import Linkedin from '../assets/Linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import Logo from '../assets/Logo.png';

function Menu() {
  return (
    <header className={style.header}>
      <span><img src={Logo} alt="Logo" className={style.logo} /></span>
        <nav className={style.nav}>
          <Link to='/'>Inicio</Link>
          <Link to='/Proyectos'>Proyectos</Link>
          <Link to='/SobreMi'>SobreMi</Link>
          </nav>
        
        <div className={style.Redes}>
        <a href="https://www.linkedin.com/in/ariel-ferreiro-30b153237/" className={style.Linkedin} target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="" />
        </a>

        <a href="https://github.com/ferreiroariel1" className={style.github} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" />
        </a>

        <a href="https://www.instagram.com/ariel_ferreiro1/" className={style.instagram}target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="" />
        </a>

    </div>
    </header>
  )
}

export default Menu;