import React from "react";

import Site from "../locationComponents/Site";
import { ReactComponent as TestImage} from "../../../svgs/placeholderFieldHospital.svg"

const fieldHospitalProps = {
    name: "Field Hospital",
    Image: TestImage,
    imageWidth: "100px",
    imageHeight: "100px"
};

export default function FieldHospital(){
    return(
        <>
            <Site {...fieldHospitalProps}/>
        </>
    );
}