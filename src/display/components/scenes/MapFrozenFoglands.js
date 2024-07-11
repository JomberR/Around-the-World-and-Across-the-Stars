import React from "react";
import GreatWindmill from "../locations/wonders/GreatWindmill";
import FieldHospital from "../locations/sites/FieldHospital";
import Header from "../ui/Header";
import Footer from "../ui/Footer"

export default function MapFrozenFoglands(){
    return(
        <div>
            <Header locationName="The Frozen Foglands"/>

            <div className="Grid-container Grid-container-3-col">
                <div className="Grid-item-center">
                    <FieldHospital/>
                </div>
                <div className="Grid-item-center">
                    <GreatWindmill className="Grid-item-center"/>
                </div>

                <div className="Grid-item-center">
                    <FieldHospital/>
                </div>
            </div>

            <Footer/>
        </div>
    );
}