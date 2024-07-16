import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { STORAGE_ENUM, EVENT_ENUM } from "../../../common/enums/Enums";

import EndTurnButton from "../actions/EndTurnButton";

export default function Footer(){

    const [turnCount, setTurnCount] = useState(localStorage.getItem(STORAGE_ENUM.TURN_COUNT.toString()) || 1);
    const windowRef = useRef(window);
    
    useEffect(() => {
        const currentWindowRef = windowRef.current;
        currentWindowRef.addEventListener(EVENT_ENUM.TURN_END.toString(), () => setTurnCount(localStorage.getItem(STORAGE_ENUM.TURN_COUNT.toString()) || 1));

        return () => currentWindowRef.removeEventListener(EVENT_ENUM.TURN_END.toString(), setTurnCount);
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