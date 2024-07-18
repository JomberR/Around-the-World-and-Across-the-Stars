import React from "react";

import Location from "./Location";
import Fortification from "./Fortification";

export default function Site(props){
    const modifiedProps = {...props,
        classTitleName: "Site-title"
    }
    return(
        <>
            <Location {...modifiedProps}/>
            {props.locationId}
            <Fortification {...modifiedProps}/>
        </>
    );
}