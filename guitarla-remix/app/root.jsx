import {useState,useEffect} from 'react'
import {
    Links,
    Outlet,
    Scripts,
    LiveReload,
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import {Footer} from '~/components/footer'


export function links(){
   

    return[
        {
            rel:'stylesheet',
            href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossOrigin:"true"
        },
        {
            rel:'stylesheet',
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"

        },
        {
            rel:'stylesheet',
            href:styles
        },

    ]

}

export default function App(){
    const carritoLs=typeof window!=='undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? []:null

    const [carrito,setCarrito]= useState(carritoLs)

    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(carrito))
    },[carrito])

    const agregarCarrito=(guitarra)=>{
       if(carrito.some(guitarraState=>guitarraState.id===guitarra.id)){
       //iterar sobre el arreglo e identificar el elemnto duplicado
       const carritoActualizado=carrito.map((guitarraState)=>{
        if(guitarraState.id===guitarra.id){
            //reescribir la cantidad
            guitarraState.cantidad=guitarra.cantidad
        }
        return guitarraState
       })
       setCarrito(carritoActualizado)

       }else{
        //registro nuevo,agregar al carrito
        setCarrito([...carrito,guitarra])
       }

    }
    const actualizarCantidad=guitarra=>{
       const carritoActualizado=carrito.map(guitarraState => {
        if(guitarraState.id===guitarra.id){
            guitarraState.cantidad=guitarra.cantidad
        }
        return guitarraState
       })
       setCarrito(carritoActualizado)
    }
    const eliminarGuitarra=(id)=>{
        const carritoActualizado=carrito.filter(guitarraState=>guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }
    return(
       <Document>
         <Outlet
            context={{
               agregarCarrito,
               carrito,
               actualizarCantidad,
               eliminarGuitarra
            }} 
         />
       </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <meta charSet='utf-8' />
                <title>GuitarLA - Remix</title>
                <meta name="viewport" viewport= "width=device-width,initial-scale=1" />
                <Links/>

            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload />
            </body>
        </html>
    )
}
export function CatchBoundary(){

}