import lasActividadesIniciales from '../activities.json';

const initialState = {
  lasActividades : lasActividadesIniciales   
}

export const AGREGAR_ACTIVIDAD = 'AGREGAR_ACTIVIDAD'
export const ELIMINAR_ACTIVIDAD = 'ELIMINAR_ACTIVIDAD'


const actividades = (state = initialState, action) => {
  switch (action.type){
    case AGREGAR_ACTIVIDAD: 
      return {
        ...state,
        lasActividades: [...state.lasActividades, action.payload]
      };
    case ELIMINAR_ACTIVIDAD: 
      return {
        ...state,
        lasActividades: state.lasActividades.filter(task => task.id !== action.payload) 
      };
    default: 
      return state;
  }
} 


export default actividades;
