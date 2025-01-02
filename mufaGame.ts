class MufaGame
{
    public date?: string;
    public color?: string;
    public location?: string;
    public otherteam?: string;

    public constructor()
    {

    }

    public toString(): string
    {
        return `${this.date} at ${this.location} against ${this.otherteam} wearing ${this.color}`;
    }

    public static processScrapedData(scrapedData: string[]): MufaGame[]
    {
        let ret : MufaGame[] = [];
        //expect first line to be the headers
        if (scrapedData.length < 9)
        {
            return ret;
        }
        
        return ret;
        for (let i = 8; i++; i < scrapedData.length)
        {
            let gameNumber = scrapedData[i];
            let game = new MufaGame();
            ret.push(game);
            game.date = scrapedData[++i];
            game.color = scrapedData[++i];
            game.location = scrapedData[++i];
            let result = scrapedData[++i];
            let pf = scrapedData[++i];
            let pa = scrapedData[++i];
            game.otherteam = scrapedData [++i];
            let otherteamColor = scrapedData[++i];
        }
    }
}