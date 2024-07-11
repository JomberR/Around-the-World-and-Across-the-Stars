import React from "react";
import Wonder from "../locationComponents/Wonder";

import {ReactComponent as TestImage} from "../../../svgs/placeholderHome.svg";

const greatWindmillProps = {
    name: "The Great Windmill",
    image: TestImage
};

export default function GreatWindmill(){
    return(
        <>
            <Wonder {...greatWindmillProps}/>
        </>
    );
}