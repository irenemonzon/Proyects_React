import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'
import ListadoGuitarra from "~/components/listadoGuitarra"



export function links(){
    return[
        {
            rel:'stylesheet',
            href:styles
        }
    ]
}

export async function loader(){
    const guitarras= await getGuitarras()
    return guitarras.data
}

function Tienda(){
    const guitarras=useLoaderData()
   
    return(
       <main className="contenedor">
        <ListadoGuitarra
        guitarras={guitarras}
        />
            
       </main>
    )
}
export default Tienda