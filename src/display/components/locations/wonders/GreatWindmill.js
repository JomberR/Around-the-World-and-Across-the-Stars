import React from "react";

import Wonder from "../locationComponents/Wonder";
import {ReactComponent as TestImage} from "../../../svgs/placeholderWonder.svg";


export default function GreatWindmill(props){
    const greatWindmillProps = {
        ...props,
        name: "The Great Windmill",
        Image: TestImage,
        imageHeight: "15vh",
        imageWidth: "15vw"
    };

    return(
        <>
            <Wonder {...greatWindmillProps}/>
        </>
    );
}