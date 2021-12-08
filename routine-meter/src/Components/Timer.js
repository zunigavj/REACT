import React, { Component } from 'react'


export default class Timer extends Component {
  constructor(){
    super();
    console.log(1, "Incialización");

    this.state = {
      timer : new Date().toLocaleTimeString(),
    }

    this.temporizador = null;
  }

  iniciarTimer = () => {
    this.temporizador = setInterval(() => {
      this.setState({timer : new Date().toLocaleTimeString()})
    }, 1000)
  }
  detenerTimer = () => {
    clearInterval(this.temporizador)
  }

  componentDidUpdate(prevProps, prevSate){
    console.log(3,"Componente actualizado");
  }

  render(){
    console.log(2, "El componte se renderiza");
    return(
      <>
	{this.state.timer}
	<button onClick={this.iniciarTimer}>Iniciar</button> 
	<button onClick={this.detenerTimer}>Detener</button> 
      </>
    )
  }

}
