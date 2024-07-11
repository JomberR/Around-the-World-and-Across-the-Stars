import React from "react";

import Location from "./Location";

export default function Site(props){
    const modifiedProps = {...props,
        classTitleName: "Site-title"
    }
    return(
        <>
            <Location {...modifiedProps}/>
        </>
    );
}