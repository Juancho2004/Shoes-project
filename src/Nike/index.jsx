import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchData } from '../Apis/api.js'
import imgLogo from './logo.png';
import './main.css';
import { Link } from 'react-router-dom';
import LoadingDescription from '../loadingDescription';
import { Navbar } from '../nav';



export function Nike() {
  
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
              {item && item.marca === 'Nike' ? (
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
