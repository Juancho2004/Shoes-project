import { Footer } from '../footerSection'
import './main.css'


export const Cesta = () =>{
    return(

    <div className='bg-firts first-open'>
       <aside className="cesta">
        <div className="cesta__container">
            <h3 className="cesta__title">Cesta</h3>
            <p className="cesta__products">0 Productos</p>

            <div className="cesta__anuncios">
               <h4 className='cesta__h4'>Envío gratuito para miembros.</h4>
               <p className='cesta__p'>Hazte Usuario para conseguir envíos rápidos y gratuitos. <a href="#" className='cesta__a'> Únete a nosotros o Iniciar sesión</a></p> 
            </div>

            <div className="cesta__resumen">
                <p>No tienes productos en tu cesta.</p>
                <h4>Resumen</h4>
                <p>¿Tienes un producto promocional?</p>
                <p>Subtotal <a className='span'></a> <span>—</span></p>
                <p>Gastos de envío y gestión estimados <span>Gratuito</span></p>
                <p>Total <span>—</span></p>
            </div>

            <div className="cesta__favorites">
                <h4>Favorito</h4>
                <p>¿Quieres ver tus favoritos? <a href="#"> Únete a nosotros</a></p>
            </div>
        </div>
        <Footer/>
       </aside>
    </div>   
    )
}