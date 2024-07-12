import React from "react";
import GreatWindmill from "../locations/wonders/GreatWindmill";
import FieldHospital from "../locations/sites/FieldHospital";
import Header from "../ui/Header";
import Footer from "../ui/Footer"

export default function MapFrozenFoglands(){
    return(
        <div>
            <Header locationName="The Frozen Foglands"/>

            <div className="Grid-container Hex-layout">

                <div className="Grid-item-center Hex-layout-item1">
                    <FieldHospital/>
                </div>
                <div className="Grid-item-center Hex-layout-item2">
                    <FieldHospital/>
                </div>

                <div className="Grid-item-center Hex-layout-item3">
                    <FieldHospital/>
                </div>
                <div className="Grid-item-center Hex-layout-item4">
                    <GreatWindmill className="Grid-item-center"/>
                </div>
                <div className="Grid-item-center Hex-layout-item5">
                    <FieldHospital/>
                </div>

                <div className="Grid-item-center Hex-layout-item6">
                    <FieldHospital/>
                </div>
                <div className="Grid-item-center Hex-layout-item7">
                    <FieldHospital/>
                </div>
                
            </div>

            <Footer/>
        </div>
    );
}