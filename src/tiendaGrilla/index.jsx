import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import LoadingDescription from '../loadingDescription';
import './main.css';


 export const TiendaGrilla = () => {
  const [zapatillas, setZapatillas] = useState([]);
  const [page, setPage] = useState(Number);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(`http://195.35.37.45:5000/load-more-zapatillas/${page}`);
      const data = await response.json();
      
      
      setZapatillas((prevZapatillas) => [...prevZapatillas, ...data]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(data.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const uniqueElements = zapatillas
  ? zapatillas.filter((ele, index, self) => self.findIndex((item) => item.id === ele.id) === index)
  : [];

  return (
    <div>
      <InfiniteScroll
        dataLength={zapatillas.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<LoadingDescription/>} 
      >
        <ul className='tienda__grilla'>
          {uniqueElements.map((zapatilla,index) => (
            <Link to={`zapatilla/${zapatilla.id}`}>
              <li key={zapatilla.id}>
                <img src={`/public/img/${zapatilla.imagen_url}`} alt="" className='img__muestra'/>
                <p className='tienda__title'>{zapatilla.nombre}</p>
                <p className='tienda__generos'>Zapatillas - {zapatilla.genero}</p>
                <p className='tienda__price'>{zapatilla.talla}</p>
              </li>
            </Link>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};