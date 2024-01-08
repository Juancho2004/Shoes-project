import React from 'react';
import { useState } from 'react';
import './main.css';


export const Tooltip = ({text, children}) => {
  const [isVisible, setIsVisible] = useState(false)
    return (
    <div 
            className="tooltip-container"
            onMouseEnter={()=> setIsVisible(true)}
            onMouseLeave={()=> setIsVisible(false)}
        >
        {children}
        {isVisible && <p id='tooltip'>{text}</p>}
  </div>
  )
}
