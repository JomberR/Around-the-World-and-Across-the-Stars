import React from "react";
import PropTypes from "prop-types"

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

Header.propTypes = {
    locationName: PropTypes.string.isRequired
};