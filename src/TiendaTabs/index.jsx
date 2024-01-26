import React from 'react'
import './main.css';
import { Marcas } from '../Marcas';



export function TiendaTabs() {
  return (
    <>
      <section className='TiendaTabs'>
        <h1 className='TiendaTabs__title'>Marcas</h1>
          <div className='TiendaTabs__container'>
              <Marcas />
            {/* <div className="tiendatabs__containers--btns">
            {data?.map((ele, index) => (
              <ul className='TiendaTabs__btns'>
                  <li className= 'tiendaTabs__ctas uno' onClick={()=> setValue(ele)}>{ele.marca}</li>
              </ul>
            ))}   
            </div> */}
            {/* <div className='contenido'>
            {<TiendaGrilla/>? (

              <>
              <TiendaGrilla productos={data}/>
              </>
              
            ): (
                <ul className='contenido_productos'>
                   {value && value.marca === 'Nike' ? (
                    <>
                    <li key={value.id}>
                      <Link to={`nike/${value.id}`}>
                        <img src={`/public/img/${value.imagen_url}`} alt="/" className='api_imgs'/>
                        <p className='api_paragraph api_paragraph--1'>{value.marca}</p>
                        <p className='api_paragraph api_paragraph--2'>{value.nombre}</p>
                        <p className='api_paragraph api_paragraph--3'>{value.genero}</p>
                        <p className='api_paragraph api_paragraph--4'>{value.talla}</p>
                      </Link>
                    </li>
                    </>
                ): (
                    console.log(value)
                )}
              </ul>
              <Nike value={value}/>
              
            )}
            </div> */}
          </div>
      </section>
    </>
  )     
}
