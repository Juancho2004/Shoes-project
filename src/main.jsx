import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import './main.css'
import { PrincipalView } from './Principal-view';
import { BlogPost } from './BlogPost';
import { Hombre } from './Hombre';
import { Mujer } from './Femenino';
import { AvisoLegal } from './Derechos';
import { MensajesWhatsapp } from './MensajesWhatsapp';
import { Nike } from './Nike';
import { Adidas } from './Adidas';
import { NewBalance } from './NB';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
          <Link to="/"> <Home/></Link>
      <Routes>
        <Route path="/" element={<PrincipalView/>}/>
        <Route path="/home" element={<Home />} /> 
        <Route path="/zapatilla/:id" element={<BlogPost/>}/>
        <Route path="/hombre/zapatilla/:id" element={<BlogPost/>}/>
        <Route path="/mujer/zapatilla/:id" element={<BlogPost/>}/>
        <Route path="/hombre" element={<Hombre/>}/>
        <Route path="/mujer" element={<Mujer/>}/>
        <Route path="/avisoLegal" element={<AvisoLegal/>}/>
        <Route path="/mensaje" element={<MensajesWhatsapp/>}/>
        <Route path="/nike" element={<Nike/>}/>
        <Route path="/adidas" element={<Adidas/>}/>
        <Route path="/newBalance" element={<NewBalance/>}/>
        <Route path="/nike/zapatilla/:id" element={<BlogPost/>}/>
        <Route path="/adidas/zapatilla/:id" element={<BlogPost/>}/>
        <Route path="/newBalance/zapatilla/:id" element={<BlogPost/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)

function Home() {
  return <h2 className='home'>Home</h2>;
}









