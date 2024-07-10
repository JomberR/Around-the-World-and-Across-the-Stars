import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { STORAGE_ENUM } from "../../../common/enums/StorageEnums";
import { EVENT_ENUM } from "../../../common/enums/EventEnums";

import EndTurnButton from "../actions/EndTurnButton";

export default function Footer(){

    const [turnCount, setTurnCount] = useState(localStorage.getItem(STORAGE_ENUM.TURN_COUNT) || 1);
    const windowRef = useRef(window);
    
    useEffect(() => {
        const currentWindowRef = windowRef.current;
        currentWindowRef.addEventListener(EVENT_ENUM.TURN_END, () => setTurnCount(localStorage.getItem(STORAGE_ENUM.TURN_COUNT) || 1));

        return () => currentWindowRef.removeEventListener(EVENT_ENUM.TURN_END, setTurnCount);
    }, [])



    return(
        <div className="UI-footer">
            <EndTurnButton/>
            <div>
                {turnCount}
            </div>
        </div>
    );
}