import React ,{useEffect, useState}from 'react'
import { fetchData } from '../Apis/api';
import {motion} from 'framer-motion'  
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './main.css';


const variants = {

    open: {
        transform: 'scaleX(.2)'
    },
  
    close: {
        transform: 'scaleX(1)'
    }
  
  }


export const Search = () =>{
    const [data, setData] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    // const history = useNavigate();




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

    const searchedTodo = data ? data.filter((zapatilla) =>  {
        const zapatillaMarca = zapatilla.nombre ? zapatilla.nombre.toLowerCase():'';
        const zapatillaMarcas = searchValue.toLowerCase();

        return zapatillaMarca.includes(zapatillaMarcas)
    }): [];


    // useEffect(()=> {
    //     return () => {
    //         history('/')
    //     }
    // }, [history])

    return(
    <div className='search-scrim search-open'>
        <aside className='search'>
            <motion.div className="aside__input"
                initial='open'
                animate='close'
                variants={variants}
            >
                <input 
                    type="text" 
                    placeholder='Buscar'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </motion.div>

            {!searchValue  ? (
                <div className='previas_search'>
                    <h1>Terminos de busqueda populares</h1>
                    <span>
                        <p>Puma Roma</p>
                        <p>Nike Correlate</p>
                        <p>Adidas Country</p>
                        <p>New Balance 574</p>
                    </span>
                </div>
            ): (
                <div className="input__texts">
                    <ul className='search__container'>
                        {searchedTodo.map((item, index) => (
                        <Link to={`zapatilla/${item.id}`}>
                            <li key={index}>
                                <img src={`/public/img/${item.imagen_url}`} alt="" className='img__input'/>
                                <p className='tienda__title'>{item.nombre}</p>
                                <p className='tienda__generos'>Zapatillas - {item.genero}</p>
                                <p className='tienda__price'>{item.talla}</p>
                            </li>
                        </Link>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    </div>
    )
}