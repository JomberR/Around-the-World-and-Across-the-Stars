import React from "react";

import Wonder from "../locationComponents/Wonder";
import {ReactComponent as TestImage} from "../../../svgs/placeholderWonder.svg";

const greatWindmillProps = {
    name: "The Great Windmill",
    Image: TestImage,
    imageHeight: "240px",
    imageWidth: "240px"
};

export default function GreatWindmill(){
    return(
        <>
            <Wonder {...greatWindmillProps}/>
        </>
    );
}