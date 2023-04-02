import { useState,useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import Filtros from './components/Filtros';
import ListadosGastos from './components/ListadosGastos';
import {generarId} from './helpers/index'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
 
const [presupuesto,setPresupuesto]=useState(
  Number(localStorage.getItem('presupuesto'))?? 0
);
const [isValidPresupuesto,setIsValidPresupuesto]=useState(false);
const [modal,setModal]=useState(false);
const [animarModal,setAnimarModal]=useState(false);
const [gastos,setGastos]=useState(
  localStorage.getItem('gastos')? JSON.parse(localStorage.getItem('gastos')):[]
  )
const [gastoEditar,setGastoEditar]=useState({});
const [filtro,setFiltro]= useState('')
const [gastosFiltrados,setGastosFiltrados]= useState([])


useEffect(()=>{
  if(Object.keys(gastoEditar).length>0){
    setModal(true);
    setTimeout(()=>{
     setAnimarModal(true);
    },500)
  }

},[gastoEditar])

useEffect(()=>{
 localStorage.setItem('presupuesto',presupuesto ?? 0);

},[presupuesto])

useEffect(()=>{
  const presupuestoLs=Number(localStorage.getItem('presupuesto')?? 0)
  if(presupuestoLs >0){
    setIsValidPresupuesto(true);
  }
},[])

useEffect(()=>{

localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
  
},[gastos])
useEffect(()=>{
  if(filtro){

    const gastosFiltrados=gastos.filter(gasto=>gasto.categoria===filtro)
    setGastosFiltrados(gastosFiltrados)

  }

},[filtro]);


const handleNuevoGasto=()=>{
  setGastoEditar({});
  setModal(true);
  setTimeout(()=>{
   setAnimarModal(true);
  },500)
}
const guardarGato=(gasto)=>{
  if(gasto.id){
    const gastosActualizados=gastos.map(gastoState=>gastoState.id===gasto.id ? gasto:gastoState)
    setGastos(gastosActualizados);
    setGastoEditar({});
  }else{
    gasto.id=generarId();
  gasto.fecha=Date.now();
  setGastos([...gastos,gasto])
  }
  setAnimarModal(false);
  setTimeout(()=>{
    setModal(false);
  },500)

}
const eliminarGasto=(id)=>{
  const gastosActualizados=gastos.filter(gasto => gasto.id!==id);
  setGastos(gastosActualizados);

}
  return (
    
    <div className={modal ? "fijar":""}>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      gastos={gastos}
      setGastos={setGastos}
      />
      {isValidPresupuesto &&(
        <>
          <main>
            <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
            />
            <ListadosGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
           gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto}
            alt='nuevo gasto'
            onClick={handleNuevoGasto}
          />
  
        </div>
        </>
        )
      }
      {modal &&(
       <Modal
       setModal={setModal}
       animarModal={animarModal}
       setAnimarModal={setAnimarModal}
       guardarGato={guardarGato}
       gastoEditar={gastoEditar}
       setGastoEditar={setGastoEditar}
       />

      )}
    
      
    </div>
  )
}

export default App
