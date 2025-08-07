import { display } from "./lib.js";
import { add,square,testTDZ } from "./utility.js";


// call function display() of lib.js module

display("Hello World from Js Modules");
const num1=10;
const num2=30;

// call functions from utility.js

const result=add(num1,num2);


const outputDiv=document.getElementById('output');
outputDiv.innerHTML=`Addition : ${result} <br> Square of 200 is : ${square(200)}`;

testTDZ();