export default class Place {
    locationName = "";
    heroList = [];
    taskList = [];
    placeId;

    constructor(locationName, taskList, placeId){
        this.locationName = locationName;
        this.taskList = taskList;
        this.placeId = placeId;
    }
}