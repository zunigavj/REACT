import React, { useState } from 'react' 
import { useDispatch } from 'react-redux'
import { agregarActividad } from '../store'

const ActivityInput = () => {

  const [nuevaActividad, setearNuevaActividad] = useState('');

  const handleChange = event => setearNuevaActividad(event.target.value); 

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(agregarActividad(nuevaActividad));
    setearNuevaActividad(''); 
  }

  return (
    <div>
    <input className="txtAgregarActividad" type="text" onChange={handleChange} placeholder="Actividad" value={nuevaActividad}/> 
    <button className="btnAgregarActividad" onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default ActivityInput;
