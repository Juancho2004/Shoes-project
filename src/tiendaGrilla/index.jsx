
import './main.css';
import imgMuestra from './shoes.jpg'

export function TiendaGrilla ({title,genres,precio}){
    return(
        <div className="tienda__grilla">
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
            <div className='tienda__containers'>
                <img src={imgMuestra} alt="" className='img__muestra'/>
                    <p className='tienda__title'>{title}</p>
                    <p className='tienda__generos'>{genres}</p>
                    <p className='tienda__price'>{precio}</p>
            </div>
        </div>
       )
}