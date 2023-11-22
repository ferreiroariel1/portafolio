import React from 'react'
import style from '../Menu/Redes.module.css'
import Linkedin from '../assets/Linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'

function Redes() {
  return (
    <div className={style.Redes}>
        <a href="#">
            <img src={Linkedin} alt="" />
        </a>

        <a href="#">
            <img src={github} alt="" />
        </a>

        <a href="#">
            <img src={instagram} alt="" />
        </a>

    </div>
  )
}

export default Redes