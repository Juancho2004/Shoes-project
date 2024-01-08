import './main.css';
import imgMain from './img/post.jpg'
import imgDominika from './img/dominika.jpg'
import imgRun from './img/run.jpg'
import imgShoes from './img/shoes.jpg'
import imgNiño from './img/mizuno.jpg'
import imgSubiyato from './img/subiyanto.jpg'
import imgHombre from './img/cottonbro.jpg'
import imgMujer from './img/cayabyab.jpg'
import imgCorrer from './img/correr.jpg'
import imgFutbol from './img/futbol.jpg'
import imgBaloncesto from './img/balocesto.jpg'
import imgTennis from './img/tennis.jpg'
import imgTrainning from './img/trainning.jpg'
import { FooterMain } from '../footerMain/index';


export function Main (){

    return(
    <main>
        <section className="section__anuncio">
            <h1 className="anuncio__title">Devoluciones y entrega gratuitas</h1>
            <p className="anuncio__paragraph">Como usuario, tienes envios y devoluciones gratis en un plazo de 30 dias. <a href="#">Obten mas informacion y unete</a></p>
        </section>

        <section className="section1">
            <p className="section__descuento">Novedad: Nike Pegasus 40</p>
            <h1 className="section__title">REACTIVIDAD PARA CORRER A TU MANERA.</h1>
            <p className="section__paragraph">En su 40 aniversario, las Pegasus 40 son más reactivas que nunca con un ajuste más amortiguado y personalizado.</p>
        </section>

        <div className="section__image">
            <img src={imgMain}/>
        </div>

        <section className="section__running">
            <div className="images__running">
                <img src={imgDominika} className="section__img " />
            </div>
            <div className="images__running">
                <img src={imgRun} className="section__img" />
            </div>
            <div className="images__running">
                <img src={imgShoes} className="section__img" />
            </div>
            <div className="images__running">
                <img src={imgSubiyato} className="section__img section__img--mdf" />
            </div>

            <a href="#" className="running__btn">Ropa de deportiva</a>
        </section>

        <section className="generos">
        <h2 className='generos__tittle'>Más por descubrir</h2>
            <div className="generos__running">
                <img src={imgMujer} className="generos__img " />
                <a href="#" className='generos__btn'>Mujer</a>
            </div>
            <div className="generos__running">
                <img src={imgHombre} className="generos__img " />
                <a href="#" className='generos__btn'>Hombre</a>
            </div>
            <div className="generos__running">
                <img src={imgNiño} className="generos__img " />
                <a href="#" className='generos__btn'>Niño</a>
            </div>
 
        </section>

        <section className="deportes">
            <h2 className="deportes__title">Filtrar por deporte</h2>
            <div className="deportes__container">
                <img src={imgFutbol} className="deportes__img" />
                <a href="#" className='deportes__cta'> Fútbol</a>
            </div>
            <div className="deportes__container">
                <img src={imgCorrer} className="deportes__img" />
                <a href="#" className='deportes__cta'>Running</a>
            </div>
            <div className="deportes__container">
                <img src={imgTrainning} className="deportes__img" />
                <a href="#" className='deportes__cta'>Training</a>
            </div>
            <div className="deportes__container">
                <img src={imgTennis} className="deportes__img" />
                <a href="#" className='deportes__cta'>Tenis</a>
            </div>
            <div className="deportes__container">
                <img src={imgBaloncesto} className="deportes__img" />
                <a href="#" className='deportes__cta'>Baloncesto</a>
            </div>
        </section>

        <section className="links">
            <div className="links__container">
                <a href="#" className='links__ancors'>Zapatillas</a>
                <a href="#" className='links__ancors'>Ropa</a>
                <a href="#" className='links__ancors'>Niño/a</a>
                <a href="#" className='links__ancors'>Destacados</a>
            </div>
        </section>

        <FooterMain/>
    </main>
    )
}   