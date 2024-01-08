import React, { useState } from 'react'
import './main.css'
// import { AsideSection } from '../asideSection';
import imgJordan from './img/jordan.png'
import imgNewbalance from './img/new-balance.png'
import imgUnder from './img/under.png'
import imgConverse from './img/converse.png'
import imgBasket from './img/basket.svg'
import imgShopping from './img/shopping.svg'
import imgStore from './img/store.svg'
import imgHelp from './img/help.svg'
// import imgInfo from './img/info.svg'
import {motion} from 'framer-motion'  
import { Link } from 'react-router-dom'


const variants = {

  open: {
    transform :'translateX(100%)'
  },

  close: {
    transform :'translateX(0%)'
  }

}


export const Menu = () =>{

  return(
    <div className='pre-scrim is-open'>
      <motion.aside 
      className='aside'

      initial='open'
      animate='close'
      variants={variants}
      >


        <div className='asideSection'>
          <Link to={'/hombre'}>
            <p className=''>Hombre</p>
          </Link>
          <Link to={'/mujer'}>
            <p className=''>Mujer</p>
          </Link>
        </div>
        
        <span className='aside__span'>
          <figure className='aside__figure'>
            <img src={imgJordan} />
            <p>Jordan</p>
          </figure>
          <figure className='aside__figure aside__figure--2'>
          <img src={imgConverse}/>
          <p>Converse</p>
          </figure> 
          <figure className='aside__figure aside__figure--2'>
          <img src={imgNewbalance}/>
          <p>New Balance</p>
          </figure> 
          <figure className='aside__figure aside__figure--2'>
          <img src={imgUnder}/>
          <p>Under Armour</p>
          </figure> 
        </span>

        {/* <div className="aside__texts">
          <p className="aside__paragraph">Hazte Nike Member para descubrir los mejores productos, la motivación que necesitas e historias del deporte.<a href="#" className='aside__link'> Más información</a></p>
          <a href="#" className='aside__btn'>Unete a nosotros</a>
          <a href="#" className='aside__btn aside__btn--mdf'>Iniciar sesion</a>
        </div> */}

        <div className="aside__links">
          <figure>
            <img src={imgShopping}/>
            <a href="#">Cesta</a>
          </figure>
          <figure>
            <img src={imgBasket}/>
            <a href="#">Pedidos</a>
          </figure>
          <figure>
            <img src={imgStore}/>
            <a href="#">Buscar una tienda</a>
          </figure>
          <figure>
            <img src={imgHelp}/>
            <a href="#">Ayuda</a>
          </figure>
        </div>
      </motion.aside> 
    </div>
    );
}