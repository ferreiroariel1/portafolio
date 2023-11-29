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
import sequelize from '../assets/sequelize.svg'
import jwt from '../assets/jwt.svg'
import bcrypt from '../assets/bcrypt.svg'
import nodemailer from '../assets/nodemailer.svg'


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
            <h4>HTML<img width='50px' src={html} alt="" /></h4>
            <h4>CSS<img width='50px' src={css} alt="" /></h4>
            <h4>Javascript<img width='50px' src={javascript} alt="" /></h4>
            <h4>React<img width='50px' src={react} alt="" /></h4>
            <h4>Redux<img width='50px' src={redux} alt="" /></h4>
            <h4>Node.js<img width='50px' src={node} alt="" /></h4>
            <h4>Express<img width='50px' src={express} alt="" /></h4>
            <h4>Sequelize<img width='50px' src={sequelize} alt="" /></h4>
            <h4>JWT<img width='50px' src={jwt} alt="" /></h4>
            <h4>Bcrypt<img width='50px' src={bcrypt} alt="" /></h4>
            <h4>Nodemailer<img width='50px' src={nodemailer} alt="" /></h4>
            
          </div> 

          <form className={style.form} action="https://formsubmit.co/719de6815d48ba2f1b923a4f1955b430" method="POST">
            <h2>Contactame</h2>
            <div class="input-container">
                <label for="form-name">Tu nombre*</label>
                <input type="text" name="name"  required="" placeholder="Tu nombre"/>
            </div>
            
            <div class="input-container">
                <label for="form-email">Tu e-mail*</label>
                <input type="email" name="email"  required="" placeholder="ejemplo@email.com"/>
            </div>

            <div class="input-container">
                <label for="form-message">Tu mensaje</label>
                <textarea name="message"  cols="20" rows="15" placeholder="Hola, mundo!"></textarea>
            </div>

           <button type="submit">Enviar</button>
           <input type="hidden" name="_next" value="https://mi-portafolio-ariel-ferreiro.netlify.app/" />
           <input type="hidden" name="_captcha" value="false" />
        </form>
    </section>
  )
}

export default SobreMi;