import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/curso.server"
import ListadoGuitarra from "~/components/listadoGuitarra"
import { ListadoBlog } from "~/components/listadoBlog"
import { Curso } from "~/components/curso"
import stylesGuitarras from '~/styles/guitarras.css'
import styleBlog from '~/styles/blog.css'
import styleCurso from '~/styles/curso.css'


export function links(){
  return [
    {
      rel:'stylesheet',
      href:stylesGuitarras
    },
    {
      rel:'stylesheet',
      href:styleBlog
    },
    {
      rel:'stylesheet',
      href:styleCurso
    }
  ]

}
export async function loader(){
  
  const[guitarras,posts,curso]=await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras:guitarras.data,
    posts:posts.data,
    curso:curso.data
  }
}

function Index() {
  const {guitarras , posts,curso}=useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarra
        guitarras={guitarras}
        />
      </main>

        <Curso
        curso={curso.attributes}
        />

      <section className="contenedor">
          <ListadoBlog
          posts={posts}
          />

      </section>
   
    </>
  )
}

export default Index