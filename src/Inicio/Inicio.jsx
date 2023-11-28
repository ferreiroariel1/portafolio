import React, { useEffect } from 'react'
import style from '../Inicio/Inicio.module.css'
import argentina from '../assets/argentina.png'
import cv from '../../public/pdf/cv.pdf'



function Inicio() {
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top');
      if (scrollButton) scrollButton.style.display = window.scrollY > 20 || document.documentElement.scrollTop > 20 ? 'block' : 'none';
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
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
      
       
      <form className={style.form} action="https://formsubmit.co/719de6815d48ba2f1b923a4f1955b430" method="POST">
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
        
        <button id="scroll-to-top" onClick={scrollToTop}>
        ▲
      </button>
    </section>
  )
}

export default Inicio;