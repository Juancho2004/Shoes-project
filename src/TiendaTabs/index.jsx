
import React from 'react'
import { useFetch } from './useFetch';
import { useState } from 'react';
import imgNike from '../../public/img/imagen35_2.jpg';
import './main.css';


export function TiendaTabs() {
  // const list = [
  
  //   {
  //     id: 1,
  //     buttom : 'Nike',
  //   },
  //   {
  //     id: 2,
  //     buttom : 'Adidas',
  //   },
  //   {
  //     id: 3,
  //     buttom : 'Puma',
  //   },
  // ]

  

  const { data } = useFetch(`http://127.0.0.1:5000/zapatillas`);
  // const { nike } = useFetch('http://127.0.0.1:5000/marcas/1/zapatillas');
  // const [tabs] = useState(list);
  const [value, setValue] = useState('');
  // const [nikeValue, setNikeValue] = useState(nike);
  // console.log(nike)

  return (
    <>
      <section className='TiendaTabs'>
        <h1 className='TiendaTabs__title'>Marcas</h1>
          <div>
            {data?.map((ele, index) => (
              <ul className='TiendaTabs__btns'>
                  <li onClick={()=> setValue(ele)}>{ele.marca}</li>
              </ul>
            ))}   
            <div>
            {value === '' ? ( 
                <ul>
                  <li>
                    <h2>hombre</h2>
                    <img src={imgNike} alt="" width={80}/>
                    <p>Nike</p>
                    <p>Jordan Retro 1</p>
                    <p>$40</p>
                  </li>
                </ul>
                // <div>nike</div>
            ): (
              <ul>
                  <li key={value.id}>
                    <h2>{value.genero}</h2>
                    <img src={`public/img/${value.imagen_url}`} alt="" width={80}/>
                    <a href="">{value.marca}</a>
                    <p>{value.modelo}</p>
                    <p>{value.talla}</p>
                  </li>
                </ul>
            )}
            </div>
          </div>
      </section>
    </>
  )     
}
