import React, { useEffect, useState } from 'react'
import { fetchData } from '../Apis/genreApi'
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
      <h2 className='hombre__title'>Zapatillas para hombre</h2>
      {data ? (
        <div className='hombre__container'>
          {data.map((item, index) => (
            <span key={index}>
                {item && item.genero === 'M' ? (
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
