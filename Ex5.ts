/*Exercise 5:  Write a program that determines if a person is eligible to vote 
based on their age.*/
import prompt from 'prompt-sync';
// Create a prompt function
let user_age=prompt();
let age:number=+user_age("Enter your age!");
if(age>=18){
    console.log("You are eligible to vote!");
}else{
    console.log("Under 18!, you are not eligible");
}
