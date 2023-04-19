import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
export function links(){
    return[
        {
            rel:'stylesheet',
            href:styles
        },
        {
            rel:'preload',
            href:imagen,
            as:'image'

        }  

    ]
}

function Nosotros(){

    return(
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />
                <div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum aliquam nisi eu porta. Phasellus enim massa, sagittis sed tristique congue, cursus in ex. Aliquam maximus massa diam, vitae pellentesque enim ultrices quis. Aenean vel magna eget purus condimentum posuere commodo sed diam. 
                    </p> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum aliquam nisi eu porta. Phasellus enim massa, sagittis sed tristique congue, cursus in ex. Aliquam maximus massa diam, vitae pellentesque enim ultrices quis. Aenean vel magna eget purus condimentum posuere commodo sed diam.
                    </p> 
                </div>

            </div>

        </main>
    )
}
export default Nosotros