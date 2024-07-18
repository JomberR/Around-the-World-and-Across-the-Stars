import { TASK_LIST_ENUM } from "../../common/enums/Enums";

export class TaskList{
    taskList = new Map();
    
    constructor(map){
        this.taskList = map;
    }

    populateDefaultWonderTasks(){
        this.taskList.set();
    }

}


//Everything is being saved in JSON, so we need a way to retrieve tasks via an ID to get information out of them, or to execute them.
export function getTask(taskID){
    switch(taskID){
        case TASK_LIST_ENUM.REPAIR_FORTIFICATIONS:
            return RepairFortificationsTask;
        default:
            console.error(`TASK ${taskID} NOT FOUND!`);
            throw new Error("Task not found.");
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
    id = TASK_LIST_ENUM.REPAIR_FORTIFICATIONS;
    duration = 2;
    doTask(){
        console.log("Repairs done.")
    }
}