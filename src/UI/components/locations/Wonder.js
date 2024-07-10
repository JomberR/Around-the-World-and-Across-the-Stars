import React from "react";
import {ReactComponent as TestImage} from "../../svgs/placeholderHome.svg";

export default function Wonder({wonderName}){
    return(
        <div>
            <TestImage height={240}/>
            <div className="Wonder-title">
                {wonderName}
            </div>
        </div>
    );
}