import './main.css';
import {motion} from 'framer-motion'  
import imgSearch from './search.svg'
import React from 'react'


const variants = {

    open: {
        transform: 'scaleX(.2)'
    },
  
    close: {
        transform: 'scaleX(1)'
    }
  
  }
  


export const Search = () =>{
    return(
    <div className='search-scrim search-open'>
        <aside className='search'>
            <motion.div className="aside__input"
                initial='open'
                animate='close'
                variants={variants}
            >
                <img src={imgSearch} className="lupa" />
                <input type="text" placeholder='Buscar'/>
            </motion.div>
            <div className="input__texts">
                <p className='input__close'>Términos de búsqueda populares</p>
                <a href="#">Skechers</a>
                <a href="#">Nike</a>
                <a href="#">Adidas</a>
                <a href="#">Puma</a>
            </div>
        </aside>
    </div>
    )
}