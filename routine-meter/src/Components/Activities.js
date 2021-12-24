import React, { useState } from 'react'
import Timer from './Timer';
import { Link } from 'react-router-dom' 
import lasActividadesIniciales from '../activities.json';

  const Actividades = ({showHandler}) => {
    const [lasActividades, setActividad] = useState(lasActividadesIniciales);


    return(
	  lasActividades.map(({id, nombre}) => {
	    return id !== 2 ?
	      <li key={id}><Timer showHandler = {showHandler} />
		- <Link to={`activities/${id}`}>{nombre}</Link> </li> : 
	      <li key={id} className="advertencia">La segunda actividad no contabiliza</li>;
	  })
    )

  }

export default Actividades;


