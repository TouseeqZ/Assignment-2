"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Write a program that takes input and calculates the volume of cube?
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input_sidelength = (0, prompt_sync_1.default)();
let side_length = +input_sidelength("Enter side length for volume :");
let volume = side_length ** 3;
console.log(`The volume of ${side_length} is ${volume}`);
