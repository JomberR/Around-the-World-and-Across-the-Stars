import Place from "./Place";

export default class Site extends Place{
    threatList = [];

    currentFortification;
    maxFortification;

    currentFogLevel = 0;

    constructor(locationName, taskList, placeId, baseFortification){
        super(locationName, taskList, placeId);

        this.currentFortification = baseFortification;
        this.maxFortification = baseFortification;
    }

    
}