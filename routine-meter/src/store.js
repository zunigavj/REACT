import { createStore } from 'redux';
import actividades, { AGREGAR_ACTIVIDAD, ELIMINAR_ACTIVIDAD } from './reducers/actividades'

const store = createStore(actividades);


export const agregarActividad = (nuevaActividad) => {
  return {
    type : AGREGAR_ACTIVIDAD,
    payload : {
      id : Math.ceil(Math.random() * 100),
      nombre : nuevaActividad, 
      lugar : 'no aplica',
    }
  }
}

export const eliminarActividad = (id) => {
  return {
    type: ELIMINAR_ACTIVIDAD,
    payload: id
  }
}

export default store;
