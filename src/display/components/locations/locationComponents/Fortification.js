import React, { useEffect, useRef, useState } from "react";
import { EVENT_ENUM } from "../../../../common/enums/Enums";

export default function Fortification(props){
    
    const location = JSON.parse(localStorage.getItem(props.locationId));

    const [currentFortification, setCurrentFortification] = useState(location.currentFortification);
    const [maxFortification, setMaxFortification] = useState(localStorage.getItem(location.maxFortification));

    const windowRef = useRef(window);
    useEffect(() => {
        const currentWindowRef = windowRef.current;
        setCurrentFortification(location.currentFortification);
        setMaxFortification(location.maxFortification);

        currentWindowRef.addEventListener(EVENT_ENUM.TURN_END, () => updateState());
        return () => currentWindowRef.removeEventListener(EVENT_ENUM.TURN_END, updateState);
    }, [])

    return(
        <div>
            Fortification: {currentFortification} / {maxFortification}
        </div>
    );

    function updateState(){
        setCurrentFortification(location.currentFortification);
        setMaxFortification(location.maxFortification);
    }

}

