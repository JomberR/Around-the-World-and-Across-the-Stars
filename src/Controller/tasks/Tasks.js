export class TaskList{
    taskList = new Map();
    
    constructor(map){
        this.taskList = map;
    }

    populateDefaultWonderTasks(){
        this.taskList.set();
    }

}

export const TASK_LIST_ENUM = Object.freeze({
    REST_RESUPPLY: Symbol("restResupply"),
    REPAIR_FORTIFICATIONS: Symbol("repairFort"),
    REPEL_FOG: Symbol("repelFog")
});

//Everything is being saved in JSON, so we need a way to retrieve tasks via an ID to get information out of them, or to execute them.
export function getTask(taskID){
    switch(taskID){
        case TASK_LIST_ENUM.REPAIR_FORTIFICATIONS.toString():
            return RepairFortificationsTask;
        default:
            console.error(`TASK ${taskID.toString()} NOT FOUND!`);
            break;
    }
}

//Task definitions

class Task{
    id;
    duration;
    doTask(){
        console.error("Unimplemented");
    }
}

class RepairFortificationsTask extends Task{
    id = TASK_LIST_ENUM.REPAIR_FORTIFICATIONS.toString();
    duration = 2;
    doTask(){
        console.log("Repairs done.")
    }
}