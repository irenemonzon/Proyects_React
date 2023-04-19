import {useState} from'react'
import { Link, useOutletContext } from "@remix-run/react"

function Guitarra({guitarra,id}){
    const {agregarCarrito}=useOutletContext()
    const[cantidad,setCantidad]=useState(0)
    const {descripcion,imagen,precio,url,nombre}=guitarra



    const handleSubmit=(e)=>{
        e.preventDefault();
        if(cantidad < 1 ){ 
            return

        }
        const guitarraSeleccionada={
            id,
            imagen: imagen.data.attributes.formats.medium.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)

    }

    return(
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen Guittara ${nombre}`}/>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">{precio}</p>
                <Link
                    className="enlace"
                    to={`/guitarras/${url}`}
                >Ver producto</Link>
                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor='cantidad'>Cantidad</label>
                    <select 
                    onChange={e=>setCantidad(parseInt(e.target.value))}
                    id="cantidad">
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input 
                        type="submit"
                        value="Añadir al carrito"
                        />

                </form>
            </div>

        </div>
    )
}
export default Guitarra