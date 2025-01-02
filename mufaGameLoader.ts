class mufaGameLoader
{
    static puppeteer = require('puppeteer');

    public static async loadFromMufaSite()
   {
      const teamURL = "https://mufa.org/League/Division/Team.aspx?t=5772&d=470";
      const browser = await mufaGameLoader.puppeteer.launch({
         headless: false,
         slowMo: 250,
         })
      const page = await browser.newPage()
      await page.goto(teamURL);
      await mufaGameLoader.sleep(2000);
      console.log("loaded");
      const results = await page.evaluate(() =>{
      //our new selector
         return document?.querySelector("table")?.innerText;
      })
      //log results at the screen
      console.log(results);

      const split = results.split('\t');
      console.log(split);


      browser.close();
   }

   private static sleep(ms: number) : Promise<void>
   {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


}

mufaGameLoader.loadFromMufaSite();