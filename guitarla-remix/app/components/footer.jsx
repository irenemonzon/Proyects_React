import { Navegacion } from "./navegacion"

export const Footer=()=>{
    return(
        <footer className="footer">
            <div className="contenedor contenido">
                <Navegacion/>
                <p className="copyright">Todos los derechos reservados 2023</p>

            </div>

        </footer>
    )
}