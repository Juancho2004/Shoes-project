import './main.css';
import React ,{useEffect, useState}from 'react'
import {motion} from 'framer-motion'  
import imgSearch from './search.svg'
import { BuscadorApi } from '../Apis/api';


const variants = {

    open: {
        transform: 'scaleX(.2)'
    },
  
    close: {
        transform: 'scaleX(1)'
    }
  
  }


export const Search = () =>{
    const { inputValue, handleInputvalue, resultados, loading, error } = BuscadorApi('http://127.0.0.1:5000/zapatillas');
    // const [data, setData] = useState(null)


    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const fetcheddata = await fetchData()
    //             setData(fetcheddata)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     getData();
    // }, [])

    return(
    <div className='search-scrim search-open'>
        <aside className='search'>
            <motion.div className="aside__input"
                initial='open'
                animate='close'
                variants={variants}
            >
                <img src={imgSearch} className="lupa" />
                <input 
                    type="text" 
                    placeholder='Buscar'
                    value={inputValue}
                    onChange={(e) => handleInputvalue(e.target.value)}
                />
            </motion.div>
            {loading && <p>cargando...</p>}
            {error && <p>{error}</p>}
            <div className="input__texts">
                    <ul>
                        {resultados.map((item, index) => (
                            <li key={index}>
                                <img src={`/public/img/${item.imagen_url}`} alt="" className='img__muestra'/>
                                <p className='tienda__title'>{item.nombre}</p>
                                <p className='tienda__generos'>{item.genero}</p>
                                <p className='tienda__price'>{item.talla}</p>
                            </li>
                        ))}
                    </ul>
                {/* <p className='input__close'>Términos de búsqueda populares</p>
                <a href="#">Skechers</a>
                <a href="#">Nike</a>
                <a href="#">Adidas</a>
                <a href="#">Puma</a> */}
            </div>
        </aside>
    </div>
    )
}