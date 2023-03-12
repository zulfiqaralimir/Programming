//run on TERMINAL npm install prompt-sync
// it will install necessary module and json files
import * as promptSync from 'prompt-sync'
const input =promptSync();
//const name = input('What is your Name?');
//console.log("Hello," +name );
// const num1= input('Enter first number');
// const num2= input('Enter second number');
// const sum = num1 +num2;
// console.log(sum) //3 +5=35
const numStr1= input('Enter first number');
const numStr2= input('Enter second number');
const num1=parseInt(numStr1);
const num2=parseInt(numStr2);
const sum = num1 +num2;
console.log(sum) //3+5=8
