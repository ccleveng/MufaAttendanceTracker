// const puppeteer = require('puppeteer');

// (async () => 
//    {
//       const teamURL = "https://mufa.org/League/Division/Team.aspx?t=5772&d=470";
//       const browser = await puppeteer.launch({
//          headless: false,
//          slowMo: 250,
//          })
//       const page = await browser.newPage()
//       await page.goto(teamURL);
//       await sleep(2000);
//       console.log("loaded");
//       const results = await page.evaluate(() =>{
//       //our new selector
//          return document.querySelector("table").innerText;
//       })
//       //log results at the screen
//       console.log(results);

//       const split = results.split('\t').split('\n');
//       console.log(split);


//       browser.close()
//    })()

//    function sleep(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     }