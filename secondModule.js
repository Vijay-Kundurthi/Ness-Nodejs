 import {addition} from "./firstModule.js";
//const { addition} = require('./firstModule.js')
const a = 10;
const b = 40;
const result = addition(a, b);

console.log(`Result of the given ${a} and ${b} is ${result}`)


export function square (p1) {
    return p1 * p1;
}