"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Exercise 4:   Write a program that checks if a given number is even or odd.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Create a prompt function
let user_number = (0, prompt_sync_1.default)();
let a_number = +user_number("Enter a number to be tested! ");
if (a_number % 2 == 0) {
    console.log("it's even!");
}
else {
    console.log("It's odd!");
}
