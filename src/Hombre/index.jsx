import React, { useEffect, useState } from 'react'
import { fetchData } from '../Apis/Api.js';
import { Link } from 'react-router-dom';
import imgLogo from './logo.png';
import LoadingDescription from '../loadingDescription';
import './main.css';


export function Hombre() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const fetcheddata = await fetchData()
                setData(fetcheddata)
            } catch (error) {
                console.error(error)
            }
        }
        getData();
    }, [])


  return (
    <>
    <section className='hombre'>
      <div className='hombre__nav'>
        <Link to={'/'}>
            <img src={imgLogo} className='hombre__logo'/>
        </Link>
        <Link to={'/mujer'}>
            <p className='ov-btn-slide-left'> Ir a Mujer</p>
        </Link>
      </div>
      {data ? (
        <div className='hombre__container'>
          {data.map((item, index) => (
            <span key={index}>
                {item && item.genero === 'Hombre' ? (
                    <>
                    <Link to={`zapatilla/${item.id}`}>
                      <img src={`/public/img/${item.imagen_url}`} alt="/" className='hombre_imgs'/>
                      <p className='hombre__nombre'>{item.nombre}</p>
                      <p className='hombre__genero'>Zapatillas - {item.genero}</p>
                      <p className='hombre__talla'>{item.talla}</p>
                    </Link>
                    </>
                ): (
                    console.log(item)
                )}
            </span>
          ))}
        </div>
      ) : (
        <LoadingDescription/>
      )}
    </section>
    </>
  )
}
