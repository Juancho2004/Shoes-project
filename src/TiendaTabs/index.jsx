
import React from 'react'
import { useFetch } from './useFetch';
import { useState } from 'react';
import './main.css';


export function TiendaTabs() {
  // const list = [
  
  //   {
  //     id: 1,
  //     title:{},
  //     desc: 'prueba1',
  //     buttom : 'Adidas',
  //     image:'./img/1.jpg',
  //     link:'Comprar'
  //   },
  //   {
  //     id: 2,
  //     title:'Nike Air force 1',
  //     desc: 'prueba2',
  //     buttom : 'Nike',
  //     image:"./img/prueba2.jpg",
  //     link:'Comprar'
  //   },
  //   {
  //     id: 3,
  //     title:'Jordan retro 1',
  //     desc: 'prueba3',
  //     buttom : 'Jordan',
  //     image:"./img/prueba3.jpg",
  //     link:'Comprar',
  //   },
  //   {
  //     id: 4,
  //     title:'Jordan retro 1',
  //     desc: 'prueba3',
  //     buttom : 'Puma',
  //     image:"./img/prueba3.jpg",
  //     link:'Comprar',
  //   },
  // ]

  const { data } = useFetch('http://127.0.0.1:5000/zapatillas');
  const [value, setValue] = useState(0);
  // const { marca, } = data[value];


  return (
    <>
      <section className='TiendaTabs'>
        <h1 className='TiendaTabs__title'>Marcas</h1>
        <div>
          <ul className='TiendaTabs__btns'>
            {data?.map((ele, index) => (
              <li key={ele.id}>
                <button onClick={()=> setValue(index)} className={`TiendaTabs__cta ${index === value && 'TiendaTabs__cta--active'}`}>{ele.marca}</button>
              </li>
            ))}
          </ul>
          <div>
          {data?.map((ele, index) => (
              <li key={ele.id}>
                <img src={`public/img/${ele.imagen_url}`} alt="" width={80}/>
              </li>
            ))}   
          </div>
        </div>
      </section>
    </>
  )     
}
