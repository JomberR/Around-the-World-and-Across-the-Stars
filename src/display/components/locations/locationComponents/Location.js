import React from "react";
import OpenLocationButton from "../../buttons/OpenLocationButton";

export default function Location(props){
    return(
        <div>
            <props.Image height={props.imageHeight} width={props.imageWidth}/>
            <div className={props.classTitleName}>
                {props.name}
                <br></br>
                {props.locationId}
            </div>
            <div>
                <OpenLocationButton/>
            </div>
        </div>
    );
}