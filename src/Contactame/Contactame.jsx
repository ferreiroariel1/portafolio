import React from 'react'
import style from '../Contactame/Contactame.module.css'
import alien from '../assets/alien.gif'

function Contactame() {
  return (
    <div className={style.Contactame}>
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
                <textarea name="message"  cols="20" rows="8" placeholder="Hola, mundo!"></textarea>
            </div>

           <button type="submit">Enviar</button>
           <input type="hidden" name="_next" value="https://mi-portafolio-ariel-ferreiro.netlify.app/" />
           <input type="hidden" name="_captcha" value="false" />
        </form>

        <div className={style.gif}>
          <img src={alien} alt="Ejemplo GIF" />
        </div>
    </div>
    
  )
}

export default Contactame;