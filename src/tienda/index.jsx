import React from 'react'
import { Navbar } from '../nav';
import { FooterTienda } from '../tiendafooter';
import { TiendaTabs } from '../TiendaTabs';
import imgWpp from './img/whatsapp.svg';
import './main.css';



export function Tienda () {
    
    return(
    <>
            <a href="https://api.whatsapp.com/send?phone=573217083779&text=Hola%20Mosqueras%20shoes">
                <img src={imgWpp} alt="#" className='Tienda__fixed' target='_blank'/>
            </a>
            <section className='tienda'>
                <div className="tienda__banner">
                    <p className="banner__title">Devoluciones y entregas gratis</p>
                    <p className='banner__paragraph'>Como Member, tienes envíos gratuitos y devoluciones gratuitas en un plazo de 30 días. <a href="#">Obtén más información</a></p>
                </div>

                <TiendaTabs/>
            </section>
                <FooterTienda/>
    </>
    );
}