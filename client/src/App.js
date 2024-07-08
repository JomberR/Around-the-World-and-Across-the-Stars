import React from "react";
import { useState } from 'react';

import { MAP_ENUM } from "./enums/MapEnums";

import MainMenu from "./components/MainMenu";
import MapFrozenFoglands from "./components/MapFrozenFoglands"
import './App.css';

function App() {

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  // }, []);

    const [gameState, setGameState] = useState({
      map: null
  });

  return (
    <div className="App">
      <header>
      </header>

      <MainMenu startNewGameFunction={startNewGame}/>
      <ActiveMap/>
      
    </div>
  );

  function startNewGame(map){
    localStorage.clear();
    setGameState({map: map});
  }

  //Local Components
  function ActiveMap(){
    switch(gameState.map){
      case MAP_ENUM.FROZEN_FOG_LANDS:
        return(
          <MapFrozenFoglands/>
        );
      default:
        return null;
    }
  }
}

export default App;
