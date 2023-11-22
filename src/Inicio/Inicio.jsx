import React from 'react'
import style from '../Inicio/Inicio.module.css'

function Inicio() {
  return (
    <div className={style.Inicio}>

      <h1 className={style.full}>
        FULL STACK DEVELOPER
      </h1>

      <p className={style.texto}>Programador con enfoque el desarrollode aplicaciones web,<br/> tengo habilidades tanto en el Front-end como en el Back-end,<br/> sin embargo mi especialidad y enfoque principal esta en el Back-end  </p>

      

      <div className={style.yo}>
      <h1 className={style.nombre}>ARIEL HERNAN FERREIRO</h1>
      <div className={style.botones}>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVxpDSVxbfSxLtsDgxTNKzksZMpdPHKHZfxSnPQRQXgjlNJTRjvDNVbpcrPsvgLcrXZBrW" className={style.gmail} target="_blank" rel="noopener noreferrer">GMAIL</a>
        <a href="">CV</a>
      </div>
      </div>

    </div>
  )
}

export default Inicio;