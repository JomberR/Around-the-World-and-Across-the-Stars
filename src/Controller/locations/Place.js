export default class Place {
    name = "";
    heroList = [];
    taskList = [];

    constructor(name, taskList){
        this.name = name;
        this.taskList = taskList;
    }
}