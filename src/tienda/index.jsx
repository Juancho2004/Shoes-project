import React from 'react'
import { Navbar } from '../nav';
import { FooterTienda } from '../tiendafooter';
import { TiendaTabs } from '../TiendaTabs';
import imgWpp from './img/whatsapp.svg';
import './main.css';



export function Tienda () {
    
    return(
    <>
            <img src={imgWpp} alt="#" className='Tienda__fixed'/>
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