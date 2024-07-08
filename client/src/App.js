import React from "react";
import MainMenu from "./components/MainMenu";
import Map from "./components/Map"
import './App.css';

function App() {

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  // }, []);

  return (
    <div className="App">
      <header>
      </header>

      <MainMenu/>
      <Map/>
      
    </div>
  );
}

export default App;
