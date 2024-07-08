import React from "react";

export default function MainMenu(){
    return(
        <div>
            <div className="Main-menu-title">
                Around the World and Across the Stars
            </div>
            <div className="Grid-container Grid-items-center Center-page">
                <div className="Vertical-buttons">
                <button onClick={() => alert("Not implemented!")}>
                    Continue
                </button>
                <button>
                    New Game
                </button>
                </div>
            </div>
        </div>
    );
}