import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imgFacebook from './img/facebook.svg'
import imgInstagram from './img/instagram.svg'
import imgArrow from './img/arrow.svg'
import './main.css'


export  const FooterAccordion = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const [arrow, setArrow] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
        setArrow(!arrow)
    }


  return (
    <div className={`footer-accordion ${isOpen ? 'open' : ''}`}>
      <div className="footer-header" onClick={handleToggle}>
          <img 
          className={`arrow-icon ${arrow ? 'rotate' : ''}`}
          src={imgArrow} 
          alt="arrow" />
      </div>
      <div className="footer-content">
      <div className="tienda__links">
                <a href="https://www.facebook.com/profile.php?id=100083656920051" target='_blank'>
                    <img src={imgFacebook} className="tienda__link" />
                </a>
                <a href="https://www.instagram.com/mosqueras_shoes/" target='_blank'>
                    <img src={imgInstagram} className="tienda__link" />
                </a>
            </div>
    
            <div className="tienda__avisos">
                <a href="#">© 2023 Bodega Cali, Inc. Todos los derechos reservados</a>
                <Link to={`/TerminosUso`}>
                  <p>Aviso de Legal</p>
                </Link>
            </div>
      </div>
    </div>
  )
}
