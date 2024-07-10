import React from "react";
import { useState } from 'react';

import { SCENE_ENUM } from "./common/enums/MapEnums";

import MainMenu from "./UI/components/scenes/MainMenu";
import MapFrozenFoglands from "./UI/components/scenes/MapFrozenFoglands"
import './App.css';

function App() {

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
