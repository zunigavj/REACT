import { Component } from 'react'
import Actividades from './ComponenteAltoNivel'

const ConTimer = (ComponenteOriginal) => {
  return class extends Component {
    render(){
      return (
	<ComponenteOriginal showTimer = {false}/>
      )
    }
  }
}

export default ConTimer(Actividades);
