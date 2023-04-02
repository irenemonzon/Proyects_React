import { useRouteError } from "react-router-dom";

export const ErrorPage=()=>{
    const error=useRouteError()
  
    return(
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold .t-20 text-blue-900">
            CRM- clientes
            </h1>
            <p className="text-center">Hubo un error</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )

}