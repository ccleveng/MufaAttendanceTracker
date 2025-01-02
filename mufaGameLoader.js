"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class mufaGameLoader {
    static loadFromMufaSite() {
        return __awaiter(this, void 0, void 0, function* () {
            const teamURL = "https://mufa.org/League/Division/Team.aspx?t=5772&d=470";
            const browser = yield mufaGameLoader.puppeteer.launch({
                headless: false,
                slowMo: 250,
            });
            const page = yield browser.newPage();
            yield page.goto(teamURL);
            yield mufaGameLoader.sleep(2000);
            console.log("loaded");
            const results = yield page.evaluate(() => {
                var _a;
                //our new selector
                return (_a = document === null || document === void 0 ? void 0 : document.querySelector("table")) === null || _a === void 0 ? void 0 : _a.innerText;
            });
            //log results at the screen
            console.log(results);
            const split = results.split('\t').split('\n');
            console.log(split);
            browser.close();
        });
    }
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
mufaGameLoader.puppeteer = require('puppeteer');
mufaGameLoader.loadFromMufaSite();
