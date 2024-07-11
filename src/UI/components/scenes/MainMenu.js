import React from "react";
import { useState } from 'react';
import PropTypes from "prop-types"

import { SCENE_ENUM } from "../../../common/enums/SceneEnums";
 
export default function MainMenu({startNewGameFunction, continueGameFunction}){
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
                        <button onClick={() => continueGameFunction()}>
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
                        <button onClick={() => startNewGameFunction(SCENE_ENUM.FROZEN_FOG_LANDS)}>
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

MainMenu.propTypes = {
    startNewGameFunction: PropTypes.func.isRequired
};

