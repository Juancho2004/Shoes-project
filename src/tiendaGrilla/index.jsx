import React from 'react'                                         
import './main.css';



export function TiendaGrilla ({productos}){
    return(
        <div className="tienda__grilla">
            {productos.map((ele, num) => ( 
                <ul className='tienda__containers'>
                    <li key={ele.id}>
                        <img src={`public/img/${ele.imagen_url}`} alt="" className='img__muestra'/>
                        <p className='tienda__title'>{ele.nombre}</p>
                        <p className='tienda__generos'>{ele.genero}</p>
                        <p className='tienda__price'>{ele.talla}</p>
                    </li>
                </ul>
                ))}
        </div>
       )
}