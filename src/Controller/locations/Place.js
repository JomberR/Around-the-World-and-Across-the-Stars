export default class Place {
    name = "";
    heroList = [];
    taskList = [];
    placeId;

    constructor(name, taskList, placeId){
        this.name = name;
        this.taskList = taskList;
        this.placeId = placeId;
    }
}