import { SCENE_ENUM, LOCATION_ENUM } from "../common/enums/Enums";
import FieldHospital from "./locations/namedLocations/FieldHospital";

export function newGame(map){
    localStorage.clear();
    switch (map){
        case SCENE_ENUM.FROZEN_FOG_LANDS:
            setupFrozenFoglands();
            break;
        default:
            console.error("SCENE NOT FOUND!");
            throw new Error("Scene not found.");
    }

}

function setupFrozenFoglands(){
    localStorage.setItem(SCENE_ENUM.CURRENT_SCENE, SCENE_ENUM.FROZEN_FOG_LANDS);

    let hospital0 = JSON.stringify(new FieldHospital());
    let hospital1 = JSON.stringify(new FieldHospital());
    let hospital2 = JSON.stringify(new FieldHospital());

    let hospital4 = JSON.stringify(new FieldHospital());
    let hospital5 = JSON.stringify(new FieldHospital());
    let hospital6 = JSON.stringify(new FieldHospital());

    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_0, hospital0);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_1, hospital1);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_2, hospital2);

    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_4, hospital4);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_5, hospital5);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_6, hospital6);
}