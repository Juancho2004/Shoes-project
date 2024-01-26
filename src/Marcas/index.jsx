import React, { useEffect, useState } from 'react'
import { fetchDataGenre } from '../Apis/genreApi';
import { TiendaGrilla } from '../tiendaGrilla';
import { Error } from '../error';
import { useFetch } from '../TiendaTabs/useFetch';
import Loading from '../loading';
import './main.css';
import { Link } from 'react-router-dom';


export function Marcas() {
  const { loading, error } = useFetch(`http://127.0.0.1:5000/zapatillas`)
  const [data, setData] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
 

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchDataGenre();
        setData(fetchedData); 
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const filtrarPorMarca = (marca) => {
    setMarcaSeleccionada(marca);
  };

  const dataFiltrada = marcaSeleccionada
    ? data.filter((item) => item && item.marca === marcaSeleccionada)
    : data;

  return (
    <>
      <div className="pestañas">
        <ul className='pestañas__container'>
            <li className= 'tiendaTabs__ctas uno' onClick={()=> filtrarPorMarca('Nike')}>Nike</li>
            <li className= 'tiendaTabs__ctas uno' onClick={()=> filtrarPorMarca('Adidas')}>Adidas</li>
            <li className= 'tiendaTabs__ctas uno' onClick={()=> filtrarPorMarca('Reebok')}>Reebok</li>
            <li className= 'tiendaTabs__ctas uno' onClick={()=> filtrarPorMarca('New Balance')}>New Balance</li>
            <li className= 'tiendaTabs__ctas uno' onClick={()=> filtrarPorMarca('Puma')}>Puma</li>
            <li className= 'tiendaTabs__ctas uno' onClick={()=> filtrarPorMarca('Vans')}>Vans</li>
        </ul>
      </div>

      <section className='contenido'>
        {error && <Error>{error}</Error>}
        {loading && <Loading/>}

        { marcaSeleccionada === '' && !loading && !error ? (
          <TiendaGrilla/>
        ) : (
          <div className="tienda__grilla">
            {dataFiltrada?.map((ele) => ( 
              <ul className='tienda__containers'>
                    <li key={ele.id}>
                    <Link to={`nike/${ele.id}`}>
                        <img src={`/public/img/${ele.imagen_url}`} alt="" className='img__muestra'/>
                        <p className='tienda__title'>{ele.nombre}</p>
                        <p className='tienda__generos'>Zapatillas - {ele.genero}</p>
                        <p className='tienda__price'>{ele.talla}</p>
                    </Link>
                    </li>
                </ul>
                ))}
          </div>
        )}
      </section>
    </>
  );
};