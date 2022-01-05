import { Component } from 'react'
import Actividades from './ComponenteAltoNivel'

const ConTimer = (ComponenteOriginal) => {
  return class extends Component {
    render(){
      return (
        <ComponenteOriginal showHandler = {this.props.showHandler} showTimer = {true}/>
      )
    }
  }
}

export default ConTimer(Actividades);
