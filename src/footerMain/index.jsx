import './main.css'
import imgPlus from './img/plus.svg'
import imgFacebook from './img/facebook.svg'
import imgInstagram from './img/instagram.svg'
import imgTwitter from './img/twitter.svg'


export const FooterMain = () =>{
    return(
    <footer className="Main__footer">
        <div className="footer_contenedor">
            <a href="#">TARJETAS DE REGALO</a>
            <a href="#">BUSCAR UNA TIENDA</a>
            <a href="#">NIKE JOURNAL</a>
            <a href="#">HAZTE MEMBER</a>
            <a href="#">DESCUENTO PARA ESTUDIANTES</a>
            <a href="#">COMENTARIOS</a>
            <a href="#">CÓDIGOS PROMOCIONALES</a>
        </div>

        <div className="footer_contenedor2">
            <figure>
                <a href="#">AYUDA</a>
                <img src={imgPlus} className='img__img'/>
            </figure>
            <figure>
                <a href="#">ACERCA DE LA TIENDA</a>
                <img src={imgPlus} className='img__img'/>
            </figure>
            <figure>
                <a href="#">UNETE A NOSOTROS</a>
                <img src={imgPlus} className='img__img'/>
            </figure>
        </div>

        <div className="main__links">
            <img src={imgTwitter} className="main__link" />
            <img src={imgFacebook} className="main__link" />
            <img src={imgInstagram} className="main__link" />
        </div>

        <div className="main__avisos">
            <a href="#">© 2023 Nike, Inc. Todos los derechos reservados</a>
            <a href="#">Terminos de uso</a>
            <a href="#">Terminos de venta</a>
            <a href="#">Aviso de Legal</a>
        </div>
    </footer>
    )
}