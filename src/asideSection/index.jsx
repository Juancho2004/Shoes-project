import React from 'react'
import './main.css'
import imgArrow from './arrow.svg'

export const AsideSection = ({texts}) =>{
    return(
        <div className='asideSection'>
            <p>{texts}</p>
            <img src={imgArrow} className='arrow'/>
        </div>
    )
}