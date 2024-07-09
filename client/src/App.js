import React from "react";
import { useState } from 'react';

import { SCENE_ENUM } from "./enums/MapEnums";

import MainMenu from "./components/scenes/MainMenu";
import MapFrozenFoglands from "./components/scenes/MapFrozenFoglands"
import './App.css';

function App() {

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  // }, []);

    const [gameState, setGameState] = useState({
      scene: SCENE_ENUM.MENUS
  });

  return (
    <div className="App">
      <header>
      </header>

      <ActiveScene/>

    </div>
  );

  function startNewGame(map){
    localStorage.clear();
    setGameState({scene: map});
  }

  //Local Components
  function ActiveScene(){
    switch(gameState.scene){
      case SCENE_ENUM.MENUS:
        return(
          <MainMenu startNewGameFunction={startNewGame}/>
        );
      case SCENE_ENUM.FROZEN_FOG_LANDS:
        return(
          <MapFrozenFoglands/>
        );

      default:
        return null;
    }
  }
}

export default App;
