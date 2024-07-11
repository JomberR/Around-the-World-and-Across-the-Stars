import React from "react";

export default function Location(props){
    return(
        <div>
            <props.Image height={props.imageHeight} width={props.imageWidth}/>
            <div className={props.classTitleName}>
                {props.name}
            </div>
        </div>
    );
}