import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import { Navbar } from '../nav';
import './main.css';


// Tengo en problema y es que cuando entro al localhost no me renderiza nada pero el console.log del linea 18 si trae el id del zapato mi pregunta es por que si el console.log trae informacion correctamente mi uniqueElements no me renderiza nada o me da undefined cuando le quito el && a los endpoints 

  export function BlogPost() {
    const { id } = useParams();
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://195.35.37.45:5000/zapatillas_id/${id}`);
          const respuesta = await response.json();
          console.log('data', respuesta);
          
          if (Array.isArray(respuesta)) {
            setData(respuesta);
          } else if (typeof respuesta === 'object') {
            setData([respuesta])
          } else {
            console.error('La respuesta no es una array', respuesta)
          }
        } catch (error) {
          console.error('error', error);
        }
      };
  
      fetchData();
    }, [id]);

    const uniqueElements = data
    ? data.filter((ele, index, self) => self.findIndex((item) => item.marca === ele.marca) === index)
    : [];

    
  //   useEffect(()=> {
  //     return () => {
  //         history('/')
  //     }
  // }, [history])
  
    return (
      <>
        <Navbar/>
        <div className="detalles">
          <div className="detalles_container">
          {uniqueElements.map((dta) => (
              <ul key={dta.id}>
                <li>
                  <img src={`/public/img/${dta.imagen_url}`} alt="/" className="img__data" />
                  {dta.marca && <h1 className="marca">{dta.marca}</h1>}
                  {dta.genero && <h2 className="genero">{`Zapatilla - ${dta.genero}`}</h2>}
                  {dta.talla && <h2 className="talla">{`EU ${dta.talla}`}</h2>}
                </li>
              </ul>
            ))}
          </div>
          <a href="https://api.whatsapp.com/send?phone=573217083779&text=Hola%20Mosqueras%20shoes" className='Tienda__fixed'>👉¡Haz clic aquí! Para el botón</a>
        </div>
      </>
    );
  }
