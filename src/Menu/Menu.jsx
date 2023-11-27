import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Menu/Menu.module.css'
import Linkedin from '../assets/Linkedin.svg'
import github from '../assets/github.svg'
import LogoAriel from '../assets/LogoAriel.jpg';

function Menu() {
  return (
    <header className={style.header}>
      <span><img width='100px' src={LogoAriel} alt="Logo" className={style.logo} /></span>
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

        

    </div>
    </header>
  )
}

export default Menu;