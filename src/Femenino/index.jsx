import React, { useEffect, useState } from 'react'
import { fetchData } from '../Apis/Api';
import imgLogo from './logo.png';
import './main.css';
import { Link } from 'react-router-dom';
import LoadingDescription from '../loadingDescription';


export function Mujer() {
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
    <section className='mujer'>
      <div className='mujer__nav'>
          <Link to={'/'}>
              <img src={imgLogo} className='mujer__logo'/>
          </Link>
          <Link to={'/hombre'}>
              <p className='ov-btn-slide-left'>Hombre</p>
          </Link>
      </div>
      {data ? (
        <div className='mujer__container'>
          {data.map((item, index) => (
            <span key={index}>
                {item && item.genero === 'Mujer' ? (
                    <>
                      <Link to={`zapatilla/${item.id}`}>
                        <img src={`/public/img/${item.imagen_url}`} alt="/" className='mujer__imgs'/>
                        <p className='mujer__nombre'>{item.nombre}</p>
                        <p className='mujer__genero'>Zapatillas - {item.genero}</p>
                        <p className='mujer__talla'>{item.talla}</p>
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
