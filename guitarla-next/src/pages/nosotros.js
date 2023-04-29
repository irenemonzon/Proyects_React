import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros(){
    return(
        <Layout
            title={'Nosotros'}
            description="Sobre nosotros, GuitarLa, tienda de musica"
        > 
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>
                <div className={styles.contenido}>
                    <Image 
                    src="/img/nosotros.jpg"
                    width={1000}
                    height={800}
                    alt="imagen sobre nosotros"/>
                   <div>
                    <p>
                    Vestibulum tempor leo sed nisl lobortis hendrerit. Phasellus ut tortor odio. Nulla facilisi. Nulla mauris justo, aliquam sit amet euismod at, tempus sodales mi. Vivamus fringilla vestibulum tellus, vel viverra urna laoreet ut.
                    </p>
                    <p>
                    Vestibulum tempor leo sed nisl lobortis hendrerit. Phasellus ut tortor odio. Nulla facilisi. Nulla mauris justo, aliquam sit amet euismod at, tempus sodales mi. Vivamus fringilla vestibulum tellus, vel viverra urna laoreet ut.
                    </p>

                   </div>

                </div>

            </main>
        </Layout>
    )

}