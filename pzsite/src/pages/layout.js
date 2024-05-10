// import Headers from "./components/headers";

function Layout() {
  return (
    // <Headers />
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
          layout
        </a>
      </div>
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React layout
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

export default Layout;
