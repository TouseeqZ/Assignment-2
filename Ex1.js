"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
//Area of rectangle
// Create a prompt function
let getLengthInput = (0, prompt_sync_1.default)();
let getwidthInput = (0, prompt_sync_1.default)();
// Ask the user for input
let length = +getLengthInput('Enter length: ');
let width = +getwidthInput('Enter width: ');
// Display the user input
let area = length * width;
console.log(`You entered: ${area}`);
