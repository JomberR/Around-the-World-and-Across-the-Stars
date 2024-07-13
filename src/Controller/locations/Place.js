export default class Place {
    name = "";
    position = [];
    heroList = [];

    taskList = [];

    constructor(name, position, taskList){
        this.name = name;
        this.position = position;
        this.taskList = taskList;
    }
}