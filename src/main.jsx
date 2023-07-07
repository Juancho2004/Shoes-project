import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './main.css'
import { PrincipalView } from './Principal-view';
// import {Navbar} from './nav/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="#" element={<PrincipalView/>}/>
      </Routes>
    <PrincipalView/>
    </BrowserRouter>
  </React.StrictMode>
)




