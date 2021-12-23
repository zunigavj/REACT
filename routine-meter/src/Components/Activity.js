import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import activities from '../activities.json';

const Activity = () => {

  const [actividad, setActividad] = useState({}); 
  const params = useParams();

  useEffect(() => {
    setActividad(...activities.filter(activity => activity.id === Number(params.id)));
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
