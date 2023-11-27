import React from 'react'
import style from '../Inicio/Inicio.module.css'
import argentina from '../assets/argentina.png'
import cv from '../../public/pdf/cv.pdf'



function Inicio() {
  return (
    <section className={style.Inicio}>

      <article className={style.full}>
         <h1>FULL STACK DEVELOPER </h1>
         <p>Programador con enfoque el desarrollode aplicaciones web,
          tengo habilidades tanto en el Front-end como en el Back-end,
          sin embargo mi especialidad y enfoque principal esta en el Back-end.</p>
      </article>
      

      <div className={style.botones}>
      <h1>ARIEL HERNAN FERREIRO</h1>
      <h2><img src={argentina} alt="" /><span>Argentina</span></h2>
      <div>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVxpDSVxbfSxLtsDgxTNKzksZMpdPHKHZfxSnPQRQXgjlNJTRjvDNVbpcrPsvgLcrXZBrW" target="_blank" rel="noopener noreferrer">GMAIL</a>
        <a href={cv} download target="_blank" rel="noopener noreferrer">Descargar CV</a>
      </div>
      </div>

      

    </section>
  )
}

export default Inicio;