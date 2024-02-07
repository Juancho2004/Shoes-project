import React, { useEffect, useState } from 'react'
import './main.css'
import Cookies from 'js-cookie';


export const Cookie = () => {
  const [aceptado, setAceptar] = useState(Cookies.get('aceptado') === true)
  
  const aceptarCondiciones = () => {
    Cookies.set('aceptado', 'true' ,{expires: 365})
    setAceptar(true)
    console.log('Terminos aceptados')
  }

    return (
    <>
      <div className='container'>
        {!aceptado && (
          <section className='cookie' >
          <h2>Al hacer clic en "Aceptar cookies", aceptas el uso de cookies en este sitio web para mejorar la navegación, personalizar contenido y analizar el tráfico del sitio.</h2>
          <span>
            <a href="#" onClick={aceptarCondiciones}>Aceptar Cookies</a>
            <a href="/">Rechazar Cookies</a>
          </span>
        </section>
          )}
      </div>
    </>
  )
}
