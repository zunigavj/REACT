import logo from './stopwatchLogo.svg';
import './App.css';

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
	  <input class="txtAgregarActividad" type="text" placeholder="Activity"/>
	  <input class="btnAgregarActividad" type="button" value="Add"/>
	  <ul>
	    <li>Activity one</li>
	    <li>Activity two</li>
	    <li>Activity three</li>
	    <li>Activity four</li>
	  </ul>
	  <div>Total routine time: </div>
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
