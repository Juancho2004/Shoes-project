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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
          <Link to="/"> <Home/></Link>
      <Routes>
        <Route path="/" element={<PrincipalView/>}/>
        <Route path="/nike" element={<Home />} /> 
        <Route path="/nike/:id" element={<BlogPost/>}/>
        <Route path="/hombre" element={<Hombre/>}/>
        <Route path="/mujer" element={<Mujer/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)

function Home() {
  return <h2 className='home'>Home</h2>;
}








