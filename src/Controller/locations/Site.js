import Place from "./Place";

export default class Site extends Place{
    threatList = [];
    baseFortification = 10;
    currentFortification = this.baseFortification;
    maxFortification = this.baseFortification;;
}