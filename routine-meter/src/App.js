import logo from './stopwatchLogo.svg';
import './App.css';
import { useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Activities from './Components/Activities' 
import { Provider } from 'react-redux'
import store from './store'
import ActivityInput from './Components/ActivityInput'


function App() {

  const[showed, setShowed] = useState(false);

  const showHandler = () => setShowed(!showed);

  return (
    <div className="App">
    <header className="App-header">
      <div>
	<img src={logo}  alt="logo" />
	<p>Routine Meter</p>
	<p>Cause time matter!</p>
      </div>
      <div className="activityContainer">
	{
	  <Provider store = {store}>
	    <ActivityInput /> 
	    <Activities showHandler={showHandler} />  
	  </Provider>
	}
	{showed && <div>Se elevó el estado desde el componente Timer.js</div>}
	<div>total routine time: </div>
	<Formik
	  initialValues={{
	    nombre: '',
	    secuencia: ''
	  }}
	  validate = {(values) => 
	    {
	      let errors = {} 
	      if (!values.nombre)
	      {
		errors.nombre = "El nombre es requerido";
	      }
	      if (!values.secuencia)
	      {
		errors.secuencia = "El número de secuencia es requerido";
	      }
	      if(values.secuencia > 100)
	      {
		errors.secuencia = "La sencuencia máxima permitida es 100";
	      }
	    return errors;
	    }
	  }
	  onSubmit={(values)=> {console.log("Nombre: " + values.nombre + " Secuencia: " + values.secuencia);}}
	 >
	  { ({errors}) => (
	    <Form > 
	      <label htmlFor="nombre">Nombre</label>
	      <Field type="text" id="nombre" name="nombre" className="txtEnviarActividad" placeholder="Nombre"/> 
	      <ErrorMessage nombre="nombre" component = {() => <div className="error">{errors.nombre}</div>} />
	      <label htmlFor="secuencia">Secuencia</label>
	      <Field type="number" id="secuencia" min="1" name="secuencia" className="txtEnviarActividad" placeholder="Secuencia"/> 
	      <ErrorMessage nombre="secuencia" component = {() => <div className="error">{errors.secuencia}</div>} />
	      <button nombre="enviarFormulario" className="btnEnviar" type="submit">Enviar</button>
	    </Form>
	  )}
	</Formik> 
    </div>
    </header>
    <footer>
      <p>Jason Arturo Zúñiga</p> 
      <p>jason.zunigavj@gmail.com</p> 
    </footer>
    </div>
  );
}

export default App;
