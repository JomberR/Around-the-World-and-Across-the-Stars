import React from "react";
import GreatWindmill from "../locations/wonders/GreatWindmill";
import FieldHospital from "../locations/sites/FieldHospital";
import Header from "../ui/Header";
import Footer from "../ui/Footer"
import { LOCATION_ENUM } from "../../../common/enums/Enums";

export default function MapFrozenFoglands(){
    return(
        <div className="Game-window">
            <Header locationName="The Frozen Foglands"/>

            <div className="Grid-container Hex-layout">

                {/* Top */}
                <div className="Grid-item-center Hex-layout-item1">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_0.toString()}/>
                </div>
                <div className="Grid-item-center Hex-layout-item2">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_1.toString()}/>
                </div>

                {/* Middle */}
                <div className="Grid-item-center Hex-layout-item3">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_2.toString()}/>
                </div>
                <div className="Grid-item-center Hex-layout-item4">
                    <GreatWindmill locationId={LOCATION_ENUM.LOCATION_ID_3.toString()}/>
                </div>
                <div className="Grid-item-center Hex-layout-item5">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_4.toString()}/>
                </div>

                {/* Bottom */}
                <div className="Grid-item-center Hex-layout-item6">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_5.toString()}/>
                </div>
                <div className="Grid-item-center Hex-layout-item7">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_6.toString()}/>
                </div>

            </div>

            <Footer/>
        </div>
    );
}