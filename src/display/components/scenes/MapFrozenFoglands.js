import React, { useState, useRef } from "react";
import GreatWindmill from "../locations/wonders/GreatWindmill";
import FieldHospital from "../locations/sites/FieldHospital";
import Header from "../ui/Header";
import Footer from "../ui/Footer"
import { LOCATION_ENUM } from "../../../common/enums/Enums";

export default function MapFrozenFoglands(){
    const [isDialogVisible, setDialogVisible] = useState(false);

    const dialogRef = useRef();

    return(
        <div className="Game-window">
            <LocationDialog/>
            <Header locationName="The Frozen Foglands"/>

            <div className="Grid-container Hex-layout">

                {/* Make sure these line up with NewGame.js */}
                {/* Top */}
                <div className="Grid-item-center Hex-layout-item1">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_0}/>
                </div>
                <div className="Grid-item-center Hex-layout-item2">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_1}/>
                </div>

                {/* Middle */}
                <div className="Grid-item-center Hex-layout-item3">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_2}/>
                </div>
                <div className="Grid-item-center Hex-layout-item4">
                    <GreatWindmill locationId={LOCATION_ENUM.LOCATION_ID_3}/>
                </div>
                <div className="Grid-item-center Hex-layout-item5">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_4}/>
                </div>

                {/* Bottom */}
                <div className="Grid-item-center Hex-layout-item6">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_5}/>
                </div>
                <div className="Grid-item-center Hex-layout-item7">
                    <FieldHospital locationId={LOCATION_ENUM.LOCATION_ID_6}/>
                </div>

            </div>

            <Footer/>
        </div>
    );

    function toggleDialog(){
        if (isDialogVisible){
            setDialogVisible(false);
        }
        else{
            setDialogVisible(true);
        }
    }

    function LocationDialog(){
        if(isDialogVisible){
            return(
                <div>
                    <dialog ref={dialogRef} open className="Modal-location">
                        <p>Test!</p>
                        <button onClick={toggleDialog}>Close</button>
                    </dialog>
                </div>
            );
        }
    }
}