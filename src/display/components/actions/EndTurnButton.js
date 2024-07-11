import React from "react";
import ProcessTurn from "../../../controller/ProcessTurn";

export default function EndTurnButton(){
    return(
        <div>
            <button onClick={ProcessTurn}>End Turn</button>
        </div>
    );
}