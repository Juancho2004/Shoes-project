import React, { useEffect, useState } from 'react'
import LoadingDescription from '../loadingDescription'
import { fetchData } from '../Apis/Api.js'
import { Navbar } from '../nav'
import { Link } from 'react-router-dom'

export function Adidas() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const fetcheddata = await fetchData()
        setData(fetcheddata)
      } catch(error) {
        console.error(error)
      }
    }

    getData()
  })
  
  
  return (

    <>
    <Navbar/>
    <section className='nike'>
      {data ? (
        <div className='nike__container'>
          {data.map((item, index) => (
            <span key={index}>
              {item && item.marca === 'Adidas' ? (
                  <>
                  <Link to={`zapatilla/${item.id}`}>
                    <img src={`/public/img/${item.imagen_url}`} alt="/" className='nike_img'/>
                    <p className='nike__nombre'>{item.nombre}</p>
                    <p className='nike__genero'>Zapatillas - {item.genero}</p>
                    <p className='nike__talla'>{item.talla}</p>
                  </Link>
                  </>
              ):(
                ''
              )}
            </span>
          ))}
        </div>
      ):(
        <LoadingDescription/>
      )}
    </section>
    </>
  )
}


