import React from "react";
import ProcessTurn from "../../../controller/ProcessTurn";

export default function EndTurnButton(){
    return(
        <button onClick={ProcessTurn}>End Turn</button>
    );
}