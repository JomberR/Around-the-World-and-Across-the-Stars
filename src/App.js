import React from "react";
import { useState } from 'react';

import { SCENE_ENUM, STORAGE_ENUM } from "./common/enums/Enums";

import {newGame} from "./controller/NewGame";

import MainMenu from "./display/components/scenes/MainMenu";
import MapFrozenFoglands from "./display/components/scenes/MapFrozenFoglands"

import './App.css';


function App() {

    const [gameState, setGameState] = useState({
      scene: SCENE_ENUM.MENUS.toString()
  });

  return (
    <div className="App">
      <header>
      </header>

      <ActiveScene/>

    </div>
  );

  function startNewGame(mapEnum){
    newGame(mapEnum)
    let mapString = mapEnum.toString();
    setGameState({scene: mapString});
    localStorage.setItem(STORAGE_ENUM.ACTIVE_MAP.toString(), mapString);
  }

  function continueGame(){
    setGameState({scene: localStorage.getItem(STORAGE_ENUM.ACTIVE_MAP.toString())});
  }

  function ActiveScene(){
    switch(gameState.scene){
      
      case SCENE_ENUM.MENUS.toString():
        return(
          <MainMenu startNewGameFunction={startNewGame} continueGameFunction={continueGame}/>
        );

      case SCENE_ENUM.FROZEN_FOG_LANDS.toString():
        return(
          <MapFrozenFoglands/>
        );

      default:
        return null;
    }
  }
}

export default App;
