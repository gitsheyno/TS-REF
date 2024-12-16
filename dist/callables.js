"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const subtract = (x, y) => x - y;
//* void
function printFormattedJSON(obj) {
    console.log(JSON.stringify(obj, null, "  "));
}
const x = printFormattedJSON(["hello", "world"]);
function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
const values = [];
// invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(4));
let MyDateConstructor = Date;
const d = new MyDateConstructor(1697923072611);
function handleMainEvent(elem, handler) { }
const myFrame = document.getElementsByTagName("iframe")[0];
handleMainEvent(myFrame, (val) => { });
