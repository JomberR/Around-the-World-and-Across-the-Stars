import React from "react";
import Wonder from "../locations/Wonder";
import Header from "../ui/Header";
import Footer from "../ui/Footer"

export default function MapFrozenFoglands(){
    return(
        <div>
            <Header locationName="The Frozen Foglands"/>
            <Wonder wonderName="The Great Windmill"/>
            <Footer/>
        </div>
    );
}