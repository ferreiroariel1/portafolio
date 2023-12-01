import React from 'react'
import style from '../Inicio/Inicio.module.css'
import cv from '../../public/pdf/Cv Ariel Ferreiro.pdf'
import {Link} from 'react-router-dom'
import gmail from '../assets/gmail.svg'



function Inicio() {
 
   return (
    <section className={style.Inicio}>

      <article className={style.full}>
         <h1>FULL STACK DEVELOPER </h1>
         <p>Programador con enfoque el desarrollo de aplicaciones web,
          tengo habilidades tanto en el Front-end como en el Back-end,
          sin embargo mi especialidad y enfoque principal esta en el Back-end.</p>
      </article>
      

      <div className={style.botones}>
      <h1>ARIEL HERNAN FERREIRO</h1>
      <h2><img src={gmail} alt="" /><span>ferreiroariel1@gmail.com</span></h2>>
      
      <div>
        <nav><Link to='/Contactame'>Contactame</Link></nav>
        <a href={cv} download target="_blank" rel="noopener noreferrer">Descargar CV</a>
      </div>
      </div>
    </section>
  )
}

export default Inicio;