import Site from "../Site";
import { SITE_ENUM, TASK_LIST_ENUM } from "../../../common/enums/Enums";

export default class FieldHospital extends Site{

    constructor(){
        let locationName = "Field Hospital";
        let placeId = SITE_ENUM.FIELD_HOSPITAL;
        let baseFortification = 10;

        let taskList = [
            TASK_LIST_ENUM.REST_RESUPPLY,
            TASK_LIST_ENUM.REPAIR_FORTIFICATIONS,
            TASK_LIST_ENUM.REPEL_FOG
        ];
        
        super(locationName, taskList, placeId, baseFortification)
    }
    
}