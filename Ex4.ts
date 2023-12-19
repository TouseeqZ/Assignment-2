//Exercise 4:   Write a program that checks if a given number is even or odd.
import prompt from 'prompt-sync';
// Create a prompt function
let user_number= prompt();
let a_number:number=+user_number("Enter a number to be tested! ");
if (a_number%2==0){
console.log("it's even!");
} else {
    console.log("It's odd!");
}

