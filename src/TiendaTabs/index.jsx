
import React from 'react'
// import { useFetch } from './useFetch';
import { useState } from 'react';
import './main.css';

const list = [

  {
    id: 1,
    title:'Adidas startlife',
    desc: 'prueba1',
    buttom : 'Adidas',
    image:'./img/1.jpg',
    link:'Comprar'
  },
  {
    id: 2,
    title:'Nike Air force 1',
    desc: 'prueba2',
    buttom : 'Nike',
    image:"./img/prueba2.jpg",
    link:'Comprar'
  },
  {
    id: 3,
    title:'Jordan retro 1',
    desc: 'prueba3',
    buttom : 'Jordan',
    image:"./img/prueba3.jpg",
    link:'Comprar',
  },
]

export function TiendaTabs() {

  // const { data } = useFetch('https://api.escuelajs.co/api/v1/products')
  const [tabs] = useState(list);
  const [value, setValue] = useState(0);
  const { image, title, desc, link} = tabs[value];


  return (
    <>
      <section className='TiendaTabs'>
        <h1 className='TiendaTabs__title'>Marcas</h1>
        <div>
          <ul className='TiendaTabs__btns'>
            {tabs.map((tab, index) => (
              <li key={tab.id}>
                <button onClick={()=> setValue(index)} className={`TiendaTabs__cta ${index === value && 'TiendaTabs__cta--active'}`}>{tab.buttom}</button>
              </li>
            ))}
          </ul>

          <div>
            <article>
              <img src={image} alt="" />
            </article>

            <article>
              <h2>{title}</h2>
              <p>{desc}</p>
              <button>{link}</button>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
