import logo from './stopwatchLogo.svg';
import './App.css';
import Timer from './Components/Timer'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div>
	<img src={logo}  alt="logo" />
	<p>Routine Meter</p>
	<p>Cause time matter!</p>
      </div>
      <div className="ActivityContainer">
	<input className="txtagregaractividad" type="text" placeholder="activity"/>
	<input className="btnagregaractividad" type="button" value="add"/>
	  <ul>
	    <li><Timer/> - activity one</li>
	    <li><Timer/> - activity two</li>
	    <li><Timer/> - activity three</li>
	    <li><Timer/> - activity four</li>
	    </ul>
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
