import './main.css';
import React from 'react'
import imgLogo from './img/logo.png';
import imgSearch from './img/search.svg';
import imgMenu from './img/menu.svg';
// import imgBag from './img/bag.svg';
import imgClose from './img/close.svg'
import imgCirclex from './img/circlex.svg'
import {Menu} from '../menu/index';
import { useState } from 'react';
// import { Cesta } from '../cesta';
import { Search } from '../search';
// import { Link } from 'react-router-dom';


export function Navbar(){
    const [showModal, setShowModal] = useState(false)
    // const [showActual, setActualizate] = useState(false)
    const [searchActual, searchActualizate] = useState(false)
  

    function handleSearchActive (){
        searchActualizate(true)
    }
    
    function handleSearchDesactive (){
        searchActualizate(false)
    }

    // function handleActiveModal(){
    //     setActualizate(true)
    // }

    // function handleDesactiveModal(){
    //     setActualizate(false)
    // }

    function handleShowModal(){
        setShowModal(true)
    }

    function handleCloseModal(){
        setShowModal(false)
    }

    return(
        <header>

            {/* MENUHAMBURGUESA */}
            {showModal && <img src={imgClose} className='aside__close' onClick={handleCloseModal}/>}
            {showModal && <Menu/>}

            {/* CESTA */}
            {/* {showActual && <nav className="nav">
                <img src={imgLogo} className='nav__logo' />
                    <div className="nav__container" onClick={handleDesactiveModal}>
                        <img src={imgSearch} className='nav__services'/>
                        <img src={imgBag} className='nav__services' onClick={handleActiveModal}/>
                        <img src={imgMenu} className='nav__services' onClick={handleShowModal}/>
                    </div>
                </nav>}
            {showActual  && <Cesta/>} */}

            {/* SEARCH */}
            {searchActual && <img src={imgCirclex} className='input__cerrar' onClick={handleSearchDesactive}/>}
            {searchActual && <Search/>  }
            

            <nav className="nav">
                    <img src={imgLogo} className='nav__logo' />
                <div className="nav__container">
                    <img src={imgSearch} className='nav__services' onClick={handleSearchActive}/>
                    {/* <img src={imgBag} className='nav__services' onClick={handleActiveModal}/> */}
                    <img src={imgMenu} className='nav__services' onClick={handleShowModal}/>
                </div>
            </nav>

            {/* <Tienda/> */}
        </header>
    );
}
