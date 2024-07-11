import React from "react";

export default function Location({locationTitle, locationTitleClassName, Image}){
    return(
        <div>
            <Image height={240}/>
            <div className={locationTitleClassName}>
                {locationTitle}
            </div>
        </div>
    );
}