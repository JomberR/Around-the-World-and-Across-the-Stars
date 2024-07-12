import React from "react";

import Site from "../locationComponents/Site";
import { ReactComponent as TestImage} from "../../../svgs/placeholderFieldHospital.svg"

const fieldHospitalProps = {
    name: "Field Hospital",
    Image: TestImage,
    imageHeight: "10vh",
    imageWidth: "10vw"
};

export default function FieldHospital(){
    return(
        <>
            <Site {...fieldHospitalProps}/>
        </>
    );
}