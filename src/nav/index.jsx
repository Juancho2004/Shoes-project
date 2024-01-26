import './main.css';
import React from 'react'
import imgLogo from './img/logo.png';
import imgLogo2 from './img/userClose.png';
import imgSearch from './img/search.svg';
import imgMenu from './img/menu.svg';
import imgUser from './img/user.svg';
import imgClose from './img/close.svg'
import imgCirclex from './img/circlex.svg'
import {Menu} from '../menu/index';
import { useState } from 'react';
import { Search } from '../search';
import { User } from '../User';
import { Cookie } from '../Cookie';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export function Navbar(){
    const [showModal, setShowModal] = useState(false)
    const [showActual, setActualizate] = useState(false)
    const [searchActual, searchActualizate] = useState(false)
  

    function handleSearchActive (){
        searchActualizate(true)
    }
    
    function handleSearchDesactive (){
        searchActualizate(false)
    }

    function handleActiveModal(){
        setActualizate(true)
    }

    function handleDesactiveModal(){
        setActualizate(false)
    }

    function handleShowModal(){
        setShowModal(true)
    }

    function handleCloseModal(){
        setShowModal(false)
    }

    return(
        <>
        <header>
        {/* <Cookie/> */}
            {/* <User/> */}
            {/* MENUHAMBURGUESA */}
            {showModal && <img src={imgClose} className='aside__close' onClick={handleCloseModal}/>}
            {showModal && <Menu/>}

            {/* CESTA */}
            {showActual && <img src={imgLogo2} className='user_logo' onClick={handleDesactiveModal}/>}
            {showActual  && <User/>}

            {/* SEARCH */}
            {searchActual && <img src={imgCirclex} className='input__cerrar' onClick={handleSearchDesactive}/>}
            {searchActual && <Search/>  }
            

            <nav className="nav__mobile">
                <Link to={'/'}>
                    <img src={imgLogo} className='nav__logo'/>
                </Link>
                <div className="nav__container">
                <div className="iconDiv" tooltip="Mi cuenta"  onClick={handleActiveModal}>
                <div className="iconSVG">
                  <img src={imgUser} alt="" onClick={handleActiveModal}/>
                </div>
                </div>
                    <img src={imgSearch} className='nav__services' onClick={handleSearchActive}/>
                    <img src={imgMenu} className='nav__services' onClick={handleShowModal}/>
                </div>
            </nav>

            <nav className="nav__desktop">
                <Link to={'/'}>
                    <img src={imgLogo} className='nav__logo'/>
                </Link>
                    <div className='nav__section'>
                        <Link to={'/hombre'}>
                            <div className="flex">
                                <p className="bttn">Hombre</p>
                            </div>
                        </Link>
                        <Link to={'/mujer'}>
                            <div className="flex">
                                <p className="bttn">Mujer</p>
                            </div>
                        </Link>
                    </div>
                <div className="nav__container">
                <div className="iconDiv" tooltip="Mi cuenta"  onClick={handleActiveModal}>
                <div className="iconSVG">
                  <img src={imgUser} alt="" onClick={handleActiveModal}/>
                </div>
                </div>
                    <img src={imgSearch} className='nav__services nav__services--src' onClick={handleSearchActive}/>
                </div>
            </nav>
        </header>
    </>
    );
}
