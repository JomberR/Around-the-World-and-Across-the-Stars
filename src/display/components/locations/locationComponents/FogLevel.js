import React, { useEffect, useRef, useState } from "react";
import { EVENT_ENUM, FROZEN_FOG_LANDS_ENUM } from "../../../../common/enums/Enums";

export default function FogLevel(props){
    
    //let location = JSON.parse(localStorage.getItem(props.locationId));

    const [currentFogLevel, setCurrentFogLevel] = useState(JSON.parse(localStorage.getItem(props.locationId)).currentFogLevel);
    const maxFogLevel = FROZEN_FOG_LANDS_ENUM.MAX_FOG;

    const windowRef = useRef(window);
    
    useEffect(() => {
        const currentWindowRef = windowRef.current;

        currentWindowRef.addEventListener(EVENT_ENUM.TURN_END, () => updateState());
        return () => currentWindowRef.removeEventListener(EVENT_ENUM.TURN_END, updateState);
    }, [])

    return(
        <div>
            Fog: {currentFogLevel} / {maxFogLevel}
        </div>
    );

    function updateState(){
        setCurrentFogLevel(JSON.parse(localStorage.getItem(props.locationId)).currentFogLevel);
    }

}