import Place from "./Place";

export default class Wonder extends Place{

    constructor(name, taskList){
        //Center of map
        let position = [3, 2];
        
        super(name, position, taskList);
    }
}