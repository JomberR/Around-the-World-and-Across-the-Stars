import { EVENT_ENUM } from "../common/enums/EventEnums";
import { STORAGE_ENUM } from "../common/enums/StorageEnums";

export default function ProcessTurn(){
    let turnCount = parseInt(localStorage.getItem(STORAGE_ENUM.TURN_COUNT) || 1);
    turnCount++;
    localStorage.setItem(STORAGE_ENUM.TURN_COUNT, turnCount);


    window.dispatchEvent(new Event(EVENT_ENUM.TURN_END));
}