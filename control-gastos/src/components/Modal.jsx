import {useState,useEffect} from 'react'
import Mensaje from './Mensaje'
import cerrarBtn from '../img/cerrar.svg'
import { formatearFecha } from '../helpers';

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGato,
    gastoEditar,
    setGastoEditar
}) => {

    const [nombre,setNombre]=useState('');
    const [cantidad,setCantidad]=useState('');
    const [categoria,setCategoria] =useState('');
    const [mensaje,setMensaje]=useState('');
    const [id,setId]=useState('');
    const [fecha,setFecha]=useState('')

    useEffect(()=>{
        if(Object.keys(gastoEditar).length>0){
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha);
        }

    },[gastoEditar]);


    const ocultarModal=()=>{
        setAnimarModal(false);
        setGastoEditar({});
        setTimeout(()=>{
            setModal(false);
           },500)

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(()=>{
                setMensaje('')
            },3000)
            return
        }
        guardarGato({nombre,cantidad,categoria,id,fecha});

    }

  return (
    <div className='modal'>
       <div className="cerrar-modal">
        <img
        src={cerrarBtn}
        alt="cerrar modal"
        onClick={ocultarModal}
        />
       </div>
       <form  onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar":"cerrar"}`}>
        <legend>
       {gastoEditar.nombre?"Editar gasto":'Nuevo gasto'}
        </legend>
        {mensaje &&(
        <Mensaje tipo="error">
            {mensaje}
        </Mensaje>)}
        <div className='campo'>
            <label htmlFor="nombre">Nombre campo</label>
            <input
                 id="nombre"
                 type="text"
                 placeholder='Añade el nombre del Gasto'
                 value={nombre}
                 onChange={e=>setNombre(e.target.value)}
            />
        </div>
        <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
            <input
                 id="cantidad"
                 type="number"
                 placeholder='Añade la cantidad del Gasto: eje.300'
                 value={cantidad}
                 onChange={e=>setCantidad(Number(e.target.value))}
            />
        </div>
        <div className='campo'>
            <label htmlFor="categoria">Categoria</label>
            <select
            id="categoria"
            value={categoria}
            onChange={e=>setCategoria(e.target.value)}
            >
                <option value="">---Selecione---</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
                
            </select>
        </div>
        <input
            type="submit"
            value={gastoEditar.nombre ?'Guardar cambio':'Añadir Gasto'}

        />
       </form>
    </div>
  )
}

export default Modal