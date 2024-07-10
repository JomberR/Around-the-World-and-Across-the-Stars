import React from "react";
import {ReactComponent as TestImage} from "../../svgs/placeholderHome.svg";
import Header from "../ui/Header";
import Footer from "../ui/Footer"

export default function MapFrozenFoglands(){
    return(
        <div>
            <div>
                <Header locationName="The Frozen Foglands"/>
            </div>
            <div id="image-test">
                <TestImage/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}