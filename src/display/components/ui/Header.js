import React from "react";

export default function Header({locationName}){
    return(
        <div>
            <div className="UI-header">
                <div className="Location-title">
                    {locationName}
                </div>
            </div>
        </div>
    );
}