"use strict";
exports.__esModule = true;
//run on TERMINAL npm install prompt-sync
// it will install necessary module and json files
var promptSync = require("prompt-sync");
var input = promptSync();
//const name = input('What is your Name?');
//console.log("Hello," +name );
// const num1= input('Enter first number');
// const num2= input('Enter second number');
// const sum = num1 +num2;
// console.log(sum) //3 +5=35
var numStr1 = input('Enter first number');
var numStr2 = input('Enter second number');
var num1 = parseInt(numStr1);
var num2 = parseInt(numStr2);
var sum = num1 + num2;
console.log(sum); //3+5=8
