import React from 'react'
import style from '../SobreMi/SobreMi.module.css'
import fotoMia from '../assets/fotoMia.jpg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import node from '../assets/node.svg'
import express from '../assets/express.svg'
import postgresql from '../assets/postgresql.svg'

function SobreMi() {
  return (
    <section className={style.sobreMi}>
      <article className={style.intro}>
       <img src={fotoMia} alt="" className={style.img} />
    

      <p>Soy Desarrollador Full Stack con experiencia en la creación de aplicaciones web eficientes y  escalables, desarrolladas en el stack PERN. Trabajo con React, Redux, PostgreSQL, Express, Node js, HTML, CSS, Express, JavaScript y Sequelize.
        Cuento con cualidades de trabajo en equipo y de comunicación efectiva, apoyandome en el uso de metodologias agiles, lo cual me convierte en un profesional organizado y eficaz.</p>
        </article>

        <div className={style.educacion}>
          <h2>Educación</h2>
          <h3>Soy Henry</h3>
          <a href="https://certificates.soyhenry.com/new-cert?id=735c3a13528635da6369670878147d96970342f94def7716c729cd9a737576ce" target="_blank" rel="noopener noreferrer">Certificado</a>
        </div> 

          <div className={style.tecnologias}><h2>Tecnologias</h2></div>
          <div className={style.tecno}>
            <img width='50px' src={html} alt="" />
            <img width='50px' src={css} alt="" />
            <img width='50px' src={javascript} alt="" />
            <img width='50px' src={react} alt="" />
            <img width='50px' src={redux} alt="" />
            <img width='50px' src={node} alt="" />
            <img width='50px' src={express} alt="" />
            <img width='50px' src={postgresql} alt="" />
          </div> 

      
    </section>
  )
}

export default SobreMi;