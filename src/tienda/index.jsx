import React from 'react'
import { TiendaTabs } from '../TiendaTabs';
import { FooterAccordion } from '../FooterAccordion';
import './main.css';



export function Tienda () {
    
    return(
    <>
        <div className="tienda_conatiner">
            <section className='tienda'>
                <div className="tienda__banner">
                    <p className="banner__title">Devoluciones y entregas gratis</p>
                    <p className='banner__paragraph'>Como Member, tienes envíos gratuitos y devoluciones gratuitas en un plazo de 30 días. <a href="#">Obtén más información</a></p>
                </div>
                <TiendaTabs/>
            </section>
        </div>
        <FooterAccordion/>
    </>
    );
}