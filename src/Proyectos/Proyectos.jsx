import React from 'react';
import style from '../Proyectos/Proyectos.module.css';
import arcade from '../assets/arcade.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import node from '../assets/node.svg'
import express from '../assets/express.svg'
import postgresql from '../assets/postgresql.svg'
import instagram from '../assets/instagram.svg'

function Proyectos() {
  
  const tarjetas = [
    {
      image:[arcade],
      name: 'Arcade World',
      descrption:'Ecomerce de videojuegos, desarrollado en equipo en el proyecto final de henry',
      tecnologias:[html, css, javascript, react, redux, node, express, postgresql],
      url:'https://main--monumental-dragon-891db4.netlify.app/',
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
                  <img width='30px' src={card.tecnologias[0]} alt="" />
                  <img width='30px' src={card.tecnologias[1]} alt="" />
                  <img width='30px' src={card.tecnologias[2]} alt="" />
                  <img width='30px' src={card.tecnologias[3]} alt="" />
                  <img width='30px' src={card.tecnologias[4]} alt="" />
                  <img width='30px' src={card.tecnologias[5]} alt="" />
                  <img width='30px' src={card.tecnologias[6]} alt="" />
                  <img width='30px' src={card.tecnologias[7]} alt="" />
                 </div> 
                 <div className={style.web}>
                  <a href={card.url} target="_blank" rel="noopener noreferrer">
                    <img width='30px' src={instagram} alt="" />
                  </a>
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
