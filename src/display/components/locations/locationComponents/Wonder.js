import React from "react";

import Location from "./Location";

export default function Wonder(props){
    const modifiedProps = {...props,
        classTitleName: "Wonder-title"
    }

    return(
        <>
            <Location {...modifiedProps}/>
            {props.locationId}
        </>
    );
}