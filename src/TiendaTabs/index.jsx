
import React from 'react'
import { useFetch } from './useFetch';
import { useState } from 'react';
import './main.css';
import Loading from '../loading';
import { Error } from '../error';
import { TiendaGrilla } from '../tiendaGrilla';


export function TiendaTabs() {

  const { data, loading, error } = useFetch(`http://127.0.0.1:5000/zapatillas`)
  const [value, setValue] = useState('');
  
  return (
    <>
      <section className='TiendaTabs'>
        <h1 className='TiendaTabs__title'>Marcas</h1>
          <div className='TiendaTabs__container'>
            <div className="tiendatabs__containers--btns">
            {data?.map((ele, index) => (
              <ul className='TiendaTabs__btns'>
                  <li className= 'tiendaTabs__ctas uno' onClick={()=> setValue(ele)}>{ele.marca}</li>
              </ul>
            ))}   
            </div>
            <div className='contenido'>
            {error && <Error>{error}</Error>}
            {loading && <Loading/>}

            {value === '' && !loading && !error? (

              <>
              <TiendaGrilla productos={data}/>
              </>
            ): (
              <ul className='contenido_productos'>
                  <li key={value.id}>
                    <h2>{value.genero}</h2>
                    <img src={`/public/img/${value.imagen_url}`} alt="/" className='api_imgs'/>
                    <p className='api_paragraph api_paragraph--1'>{value.marca}</p>
                    <p className='api_paragraph api_paragraph--2'>{value.nombre}</p>
                    <p className='api_paragraph api_paragraph--3'>{value.modelo}</p>
                    <p className='api_paragraph api_paragraph--4'>{value.talla}</p>
                  </li>
              </ul>
            )}
            </div>
          </div>
      </section>
    </>
  )     
}
