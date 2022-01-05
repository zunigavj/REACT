import React, { Component } from 'react'


export default class Timer extends Component {
  constructor(){
    super();

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

  render(){
    return(
      <>
        {this.state.timer}
        <button onClick={this.iniciarTimer}>Iniciar</button> 
        <button onClick={this.detenerTimer}>Detener</button> 
        <button onClick={this.props.showHandler}>Evento en Padre</button> -  
      </>
    )
  }

}
