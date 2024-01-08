import React, { useEffect, useState } from 'react'
import './main.css';
import { fetchData } from '../Apis/genreApi';


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
      <h2 className='mujer__title'>Zapatillas para mujer</h2>
      {data ? (
        <div className='mujer__container'>
          {data.map((item, index) => (
            <span key={index}>
                {item && item.genero === 'F' ? (
                    <>
                      <img src={`/public/img/${item.imagen_url}`} alt="/" className='api_imgs'/>
                      <p>{item.genero}</p>
                    </>
                ): (
                    console.log(item)
                )}
            </span>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
    </>
  )
}
