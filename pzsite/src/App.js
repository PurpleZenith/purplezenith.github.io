// import logo from './logo.svg';
import './App.css';


// const  = new Map();
// home:
// links.set("home", "")

function App() {
  return (
    <div className="App">
      <AppHeader />

    </div>
  );
}



function AppHeader() {
  return (
    <div className="flex-container" >

      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          home
        </a>
      </div>
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      {/* <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div> */}
    </div>

  )
}

export default App;
