import { Grid,Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias=()=>{

    const {noticias}=useNoticias()

    return(
       <>
        <Typography
            textAlign='center'
            marginY={5}
            variant='h3'
            component={'h2'}  
        >
            Ultimas Noticias
        </Typography>
        <Grid 
            container
            spaicing={2}
            >
            {noticias.map(noticia=>(
                <Noticia
                    key={noticia.url}
                     noticia={noticia}
                />


            ))}
        </Grid>
       </>
    )
}

export default ListadoNoticias