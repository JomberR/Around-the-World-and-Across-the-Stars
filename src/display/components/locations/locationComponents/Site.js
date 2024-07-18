import React from "react";

import Location from "./Location";
import Fortification from "./Fortification";
import FogLevel from "./FogLevel";

export default function Site(props){
    const modifiedProps = {...props,
        classTitleName: "Site-title"
    }
    return(
        <>
            <Location {...modifiedProps}/>
            <Fortification {...modifiedProps}/>
            <FogLevel {...modifiedProps}/>
        </>
    );
}