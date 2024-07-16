import React from "react";

import Site from "../locationComponents/Site";
import { ReactComponent as TestImage} from "../../../svgs/placeholderFieldHospital.svg"



export default function FieldHospital(props){
    const fieldHospitalProps = {
        ...props,
        name: "Field Hospital",
        Image: TestImage,
        imageHeight: "10vh",
        imageWidth: "10vw",
    };
    
    return(
        <>
            <Site {...fieldHospitalProps}/>
        </>
    );
}