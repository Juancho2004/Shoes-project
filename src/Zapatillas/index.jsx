import React, { useEffect, useState } from 'react'
import { fetchDataGenre } from '../Apis/genreApi'


export function Nike() {

    // Como hacer que este codigo haga lo que te explique en el texto anterior


    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const fetcheddata = await fetchDataGenre()
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
      {data ? (
        <div className='hombre__container'>
          {data.map((item, index) => (
            <span key={index}>
                {item && item.marca === 'Nike' ? (
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

    <div className="tiendatabs__containers--btns">
            {data?.map((ele, index) => (
            <ul 
            className='TiendaTabs__btns'
            key={index}
            >
                <li className= 'tiendaTabs__ctas uno' onClick={()=> llenarValores(ele)}>{ele.nombre}</li>
            </ul>
        ))}   
    </div>
    </>
  )
}
