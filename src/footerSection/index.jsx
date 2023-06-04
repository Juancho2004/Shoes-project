import './main.css'
import imgPlus from './plus.svg'
import imgFacebook from './facebook.svg'
import imgInstagram from './instagram.svg'
import imgTwitter from './twitter.svg'

export const Footer = () =>{
    return(
    <footer className="cesta__footer">
        <div className="footer_container">
            <a href="#">TARJETAS DE REGALO</a>
            <a href="#">BUSCAR UNA TIENDA</a>
            <a href="#">NIKE JOURNAL</a>
            <a href="#">HAZTE MEMBER</a>
            <a href="#">DESCUENTO PARA ESTUDIANTES</a>
            <a href="#">COMENTARIOS</a>
            <a href="#">CÓDIGOS PROMOCIONALES</a>
        </div>

        <div className="footer__container2">
            <figure>
                <a href="#">AYUDA</a>
                <img src={imgPlus} className='footer__img'/>
            </figure>
            <figure>
                <a href="#">ACERCA DE LA TIENDA</a>
                <img src={imgPlus} className='footer__img'/>
            </figure>
            <figure>
                <a href="#">UNETE A NOSOTROS</a>
                <img src={imgPlus} className='footer__img'/>
            </figure>
        </div>

        <div className="footer__links">
            <img src={imgTwitter} className="footer__link" />
            <img src={imgFacebook} className="footer__link" />
            <img src={imgInstagram} className="footer__link" />
        </div>

        <div className="footer__avisos">
            <a href="#">© 2023 Nike, Inc. Todos los derechos reservados</a>
            <a href="#">Terminos de uso</a>
            <a href="#">Terminos de venta</a>
            <a href="#">Aviso de Legal</a>
        </div>

        <div className="footer__btn">
            <a href="#">Pasar por caja</a>
        </div>
    </footer>
    )
}