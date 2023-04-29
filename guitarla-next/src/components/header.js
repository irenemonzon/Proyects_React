import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/header.module.css'

export default function Header(){
    const router=useRouter()

    return(
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href="/">
                <Image 
                    src="/img/logo.svg" 
                    width={300}
                    height={40}
                    alt='Imagen logotipo'
                    />
                </Link>
                <nav className={styles.navegacion}>
                    <Link  legacyBehavior href="/">
                        <a className={router.pathname=== '/' ? styles.active:''} id="link">
                            Inicio
                        </a> 
                    </Link>
                    <Link legacyBehavior href="/nosotros">
                         <a className={router.pathname=== '/nosotros' ? styles.active:''} id="link">
                          Nosotros
                        </a> 
                    </Link>
                    <Link legacyBehavior href="/tienda">
                        <a className={router.pathname=== '/tienda' ? styles.active:''} id="link">
                           Tienda
                        </a> 
                    </Link>   
                    <Link  legacyBehavior href="/blog">
                        <a className={router.pathname=== '/blog' ? styles.active:''} id="link">
                         Blog
                        </a> 
                    </Link>
                    <Link  legacyBehavior href="/carrito">
                        <a className={router.pathname=== '/carrito' ? styles.active:''} id="link">
                        <Image
                            width={30}
                            height={25}
                            src='/img/carrito.png'
                            alt='Imagen Carrito'
                         />
                        </a> 
                    </Link>
                  
                </nav>

            </div>
        </header>
        
    )
}