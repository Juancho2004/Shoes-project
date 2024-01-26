import './main.css'
import React, { useState } from 'react'
import imgPlus from './img/plus.svg'
import imgFacebook from './img/facebook.svg'
import imgInstagram from './img/instagram.svg'
// import imgTwitter from './img/twitter.svg'

export function FooterTienda (){

    return(
        <footer className="tienda__footer">
            <div className="footer_contenedor">
            <div className="footer_contenedor2">
                <figure>
                    <a href="#">AYUDA</a>
                    <img src={imgPlus} className='img__img'/>
                </figure>
                <figure>
                    <a href="#">ACERCA DE LA TIENDA</a>
                    <img src={imgPlus} className='img__img'/>
                </figure>
                <figure>
                    <a href="#">UNETE A NOSOTROS</a>
                    <img src={imgPlus} className='img__img'/>
                </figure>
            </div>
    
            <div className="tienda__links">
                <a href="https://www.facebook.com/profile.php?id=100083656920051" target='_blank'>
                    <img src={imgFacebook} className="tienda__link" />
                </a>
                <a href="https://www.instagram.com/mosqueras_shoes/" target='_blank'>
                    <img src={imgInstagram} className="tienda__link" />
                </a>
            </div>
    
            <div className="tienda__avisos">
                <a href="#">© 2023 juan camilo, Inc. Todos los derechos reservados</a>
                <a href="#">Terminos de uso</a>
                <a href="#">Terminos de venta</a>
                <a href="#">Aviso de Legal</a>
            </div>
            </div> 
        </footer>
        )
}