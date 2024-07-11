import React from "react";

import Location from "./Location";

export default function Wonder(props){
    return(
        <div>
            <Location locationTitle={props.name} Image={props.image} locationTitleClassName="Wonder-title"/>
        </div>
    );
}