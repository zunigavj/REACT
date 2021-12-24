import React from 'react'
import Timer from './Timer';
import { Link } from 'react-router-dom' 
import { useSelector } from 'react-redux'

  const Actividades = ({showHandler}) => {

    const lasActividades = useSelector(state => state.lasActividades)

    return(
      <ul>
		{
		lasActividades.map(({id, nombre}) => {
			return id !== 2 ?
			<li key={id}><Timer showHandler = {showHandler} />
			- <Link to={`activities/${id}`}>{nombre}</Link> </li> : 
			<li key={id} className="advertencia">La segunda actividad no contabiliza</li>;
		})
		}
      </ul>
    )
  }

export default Actividades;


