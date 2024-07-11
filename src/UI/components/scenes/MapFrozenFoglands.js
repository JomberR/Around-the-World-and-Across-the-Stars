import React from "react";
import Wonder from "../locations/locationComponents/Wonder";
import GreatWindmill from "../locations/wonders/GreatWindmill";
import Header from "../ui/Header";
import Footer from "../ui/Footer"




export default function MapFrozenFoglands(){
    return(
        <div>
            <Header locationName="The Frozen Foglands"/>
            <GreatWindmill/>
            <Footer/>
        </div>
    );
}