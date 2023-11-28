import React from 'react';
import style from '../Proyectos/Proyectos.module.css';
import arcade from '../assets/arcade.png'


function Proyectos() {
  
  const tarjetas = [
    {
      image:[arcade],
      name: 'Arcade World',
      descrption:'Ecomerce de videojuegos, desarrollado en equipo en el proyecto final de henry',
    }
  ]

  return (
    <section className={style.Proyectos}>
      <h2>Proyectos</h2>
      <div className={style.cards}>

         {
          tarjetas.map((card, index) => {
            return(
              <div key={index} className={style.card}>
                 <div className={style.img}><img width='100%' height='250px' src={card.image} alt="" /></div>
                 <h3>{card.name}</h3>
                 <p>{card.descrption}</p>
                 <div className={style.tecno}>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Sequelize</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                  </ul>
                 </div> 
                 <div className={style.web}>
                 <a href="https://github.com/DevJuanP/BACK_Arcade_World_PF_Henry"target="_blank" rel="noopener noreferrer">REPO</a>
                 <a href="https://main--monumental-dragon-891db4.netlify.app/" target="_blank" rel="noopener noreferrer">APP</a>
                 </div>
              </div>
            )
          })
         }
     
      </div>
    </section>
  );
}

export default Proyectos;
