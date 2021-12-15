import logo from './stopwatchLogo.svg';
import './App.css';
import Timer from './Components/Timer'
import activities from './activities.json' 
import {useState} from 'react'

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
	<input className="txtAgregarActividad" type="text" placeholder="activity"/>
	<input className="btnAgregarActividad" type="button" value="add"/>
	<ul>
	{
	  activities.map(({id, name}) => {
	    return id !== 2 ?
	      <li key={id}><Timer showHandler = {showHandler} /> - {name} </li> : 
	      <li key={id} className="advertencia">La segunda actividad no contabiliza</li>;
	  })
	}
	</ul>
	{showed && <div>Se elevó el estado desde el componente Timer.js</div>}
	<div>total routine time: </div>
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
