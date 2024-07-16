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
    let hospital0 = JSON.stringify(new FieldHospital());
    let hospital1 = JSON.stringify(new FieldHospital());
    let hospital2 = JSON.stringify(new FieldHospital());

    let hospital4 = JSON.stringify(new FieldHospital());
    let hospital5 = JSON.stringify(new FieldHospital());
    let hospital6 = JSON.stringify(new FieldHospital());

    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_0.toString(), hospital0);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_1.toString(), hospital1);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_2.toString(), hospital2);

    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_4.toString(), hospital4);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_5.toString(), hospital5);
    localStorage.setItem(LOCATION_ENUM.LOCATION_ID_6.toString(), hospital6);
}