"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Exercise 3:  Write a program that checks if a given number
 is positive, negative, or zero.*/
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Create a prompt function
let number_input = (0, prompt_sync_1.default)();
let usernumber = +number_input("Enter number: ");
if (usernumber > 0) {
    console.log("Number is positive!");
}
else if (usernumber == 0) {
    console.log("Number is zero! ");
}
else {
    console.log("Number is neagtive!");
}
