import React from "react";
import { useState } from 'react';

 
export default function MainMenu(){
    const [visibleMenu, setVisibleMenu] = useState({
        menu: "startMenu"
    });

    return(
        <div>
            <div className="Main-menu-title">
                Around the World and Across the Stars
            </div>
            <div className="Grid-container Grid-items-center Center-page">
                <div className="Vertical-buttons">

                    <StartMenu/>
                    <LevelSelectMenu/>
                </div>
            </div>
        </div>
    );

    function GoToLevelSelect(){
        setVisibleMenu({menu: "levelSelect"});
    }

    function GoToStartMenu(){
        setVisibleMenu({menu: "startMenu"});
    }

    //Local Components
    function StartMenu(){
        if (visibleMenu.menu === "startMenu"){
            return(
                <div>
                    <div>
                        <button onClick={() => alert("Not implemented!")}>
                            Continue
                        </button>
                    </div>
                    <div>
                        <button onClick={GoToLevelSelect}>
                            New Game
                        </button>
                    </div>
                    
                </div>

            );
        }
        else{
            return(null);
        }
    }

    function LevelSelectMenu(){
        if (visibleMenu.menu === "levelSelect"){
            return(
                <div>
                    <div>
                        <button onClick={GoToStartMenu}>
                            Back
                        </button>
                    </div>
                    <div>
                        <button>
                            Frozen Foglands
                        </button>
                    </div>
                    <div>
                        <button disabled>
                            The Deep Dark Down Below
                        </button>
                    </div>
                    <div>
                        <button disabled>
                            Crystal Caverns
                        </button>
                    </div>
                    <div>
                        <button disabled>
                            Last Light
                        </button>
                    </div>
                </div>
            );
        }
        else{
            return(null);
        }
    }
}

