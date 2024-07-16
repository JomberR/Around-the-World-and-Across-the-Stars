import { EVENT_ENUM, STORAGE_ENUM  } from "../common/enums/Enums";

export default function ProcessTurn(){
    let turnCount = parseInt(localStorage.getItem(STORAGE_ENUM.TURN_COUNT.toString()) || 1);
    turnCount++;
    localStorage.setItem(STORAGE_ENUM.TURN_COUNT.toString(), turnCount);


    window.dispatchEvent(new Event(EVENT_ENUM.TURN_END.toString()));
}