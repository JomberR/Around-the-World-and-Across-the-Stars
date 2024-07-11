import React from "react";
import { useState } from 'react';

import { SCENE_ENUM } from "./common/enums/SceneEnums";

import MainMenu from "./UI/components/scenes/MainMenu";
import MapFrozenFoglands from "./UI/components/scenes/MapFrozenFoglands"
import './App.css';
import { STORAGE_ENUM } from "./common/enums/StorageEnums";

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
    localStorage.setItem(STORAGE_ENUM.ACTIVE_MAP, map);
  }

  function continueGame(){
    setGameState({scene: localStorage.getItem(STORAGE_ENUM.ACTIVE_MAP)});
  }

  function ActiveScene(){
    switch(gameState.scene){
      
      case SCENE_ENUM.MENUS:
        return(
          <MainMenu startNewGameFunction={startNewGame} continueGameFunction={continueGame}/>
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
