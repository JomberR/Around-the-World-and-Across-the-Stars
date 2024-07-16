import Site from "../Site";
import { TASK_LIST_ENUM } from "../../tasks/Tasks";

export default class FieldHospital extends Site{

    constructor(){
        let name = "Field Hospital";

        let taskList = [
            TASK_LIST_ENUM.REST_RESUPPLY.toString(),
            TASK_LIST_ENUM.REPAIR_FORTIFICATIONS.toString(),
            TASK_LIST_ENUM.REPEL_FOG.toString()
        ];
        
        super(name, taskList)
    }
    
}