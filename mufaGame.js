"use strict";
class MufaGame {
    constructor() {
    }
    toString() {
        return `${this.date} at ${this.location} against ${this.otherteam} wearing ${this.color}`;
    }
    static processScrapedData(scrapedData) {
        let ret = [];
        //expect first line to be the headers
        if (scrapedData.length < 9) {
            return ret;
        }
        return ret;
        for (let i = 8; i++; i < scrapedData.length) {
            let gameNumber = scrapedData[i];
            let game = new MufaGame();
            ret.push(game);
            game.date = scrapedData[++i];
            game.color = scrapedData[++i];
            game.location = scrapedData[++i];
            let result = scrapedData[++i];
            let pf = scrapedData[++i];
            let pa = scrapedData[++i];
            game.otherteam = scrapedData[++i];
            let otherteamColor = scrapedData[++i];
        }
    }
}
