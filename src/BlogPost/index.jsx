import React from 'react'
// import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import './main.css';
import { useDescription } from './useData';
import LoadingDescription from '../loadingDescription';
import { Navbar } from '../nav';



export function BlogPost() {
  const {id} = useParams()

  const { data ,loading, error } = useDescription(`http://127.0.0.1:5000/marcas/${id}/zapatillas`);

  
  return (
    <>
    <Navbar/>
    <div className="detalles">
      <div className="detalles_container">
        {loading && <LoadingDescription/>}
            {data?.map((dta) => (
              <ul>
                  <li >
                  <img src={`/public/img/${dta.imagen_url}`} alt="/" className='img__data'/>
                    <h1 className='marca'>{dta.marca}</h1>  
                    <h2 className='genero'>{`Zapatilla - ${dta.genero}`}</h2>   
                    <h2 className='talla'>{`EU ${dta.talla}`}</h2>  
                  </li>
              </ul>
            ))}   
      </div>
      </div>
    </>
  )
}
