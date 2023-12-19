"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Exercise 5:  Write a program that determines if a person is eligible to vote
based on their age.*/
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Create a prompt function
let user_age = (0, prompt_sync_1.default)();
let age = +user_age("Enter your age!");
if (age >= 18) {
    console.log("You are eligible to vote!");
}
else {
    console.log("Under 18!, you are not eligible");
}
