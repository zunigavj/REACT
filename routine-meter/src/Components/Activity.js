import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Activity = () => {

  const lasActividades = useSelector(state => state.lasActividades)
  const [actividad, setActividad] = useState({}); 
  const params = useParams();

  useEffect(() => {
    setActividad(...lasActividades.filter(activity => activity.id === Number(params.id)));
  }, []);


  return(
    <>
      <p>Nombre: {actividad.nombre}</p>
      <p>Lugar: {actividad.lugar} </p>
      <Link to={`/`}>Regresar</Link>
    </>
  )
}

export default Activity
