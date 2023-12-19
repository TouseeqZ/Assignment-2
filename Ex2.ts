//Write a program that takes input and calculates the volume of cube?
import prompt from 'prompt-sync';
let input_sidelength=prompt();
let side_length:number=+ input_sidelength("Enter side length for volume :");
let volume=side_length**3;  
console.log(`The volume of ${side_length} is ${volume}`);

