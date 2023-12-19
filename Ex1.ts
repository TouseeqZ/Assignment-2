import prompt from 'prompt-sync';
//Area of rectangle
// Create a prompt function
let getLengthInput = prompt();
let getwidthInput = prompt();

// Ask the user for input
let length: number = +getLengthInput('Enter length: ');
let width: number = +getwidthInput('Enter width: ');

// Display the user input
let area= length*width;
console.log(`You entered: ${area}`);