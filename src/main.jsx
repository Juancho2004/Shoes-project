import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import {Navbar} from './nav/index'
import './main.css'
// import { Tienda } from './tienda'
import { PrincipalView } from './Principal-view';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<PrincipalView/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
      </Routes> */}
    <PrincipalView/>
    </BrowserRouter>
  </React.StrictMode>
)




