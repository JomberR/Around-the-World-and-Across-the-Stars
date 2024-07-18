import { EVENT_ENUM, LOCATION_ENUM, SCENE_ENUM, STORAGE_ENUM  } from "../common/enums/Enums";

export default function ProcessTurn(){
    turnCounter()

    switch(localStorage.getItem(SCENE_ENUM.CURRENT_SCENE)){
        case SCENE_ENUM.FROZEN_FOG_LANDS:
            frozenFoglands();
            break;
        default:
            console.error("No scene assigned");
            throw new Error("No scene assigned");
        
    }

    window.dispatchEvent(new Event(EVENT_ENUM.TURN_END));
}

function turnCounter(){
    let turnCount = parseInt(localStorage.getItem(STORAGE_ENUM.TURN_COUNT) || 1);
    turnCount++;
    localStorage.setItem(STORAGE_ENUM.TURN_COUNT, turnCount);
}

function incrementFog(){
    let locations = LOCATION_ENUM;

    for (const locationId in locations){

        let location = JSON.parse(localStorage.getItem(LOCATION_ENUM[locationId]));

        if(location && "currentFogLevel" in location){
            location.currentFogLevel++;
            localStorage.setItem(LOCATION_ENUM[locationId], JSON.stringify(location));

        }
    }
}

function frozenFoglands(){
    incrementFog();
}