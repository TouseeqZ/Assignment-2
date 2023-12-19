/*Exercise 3:  Write a program that checks if a given number
 is positive, negative, or zero.*/
 import prompt from 'prompt-sync';
// Create a prompt function
let number_input = prompt();
let usernumber:number= + number_input("Enter number: ");
if (usernumber>0){
    console.log("Number is positive!");
}else if(usernumber==0){
    console.log("Number is zero! ");

} else {
    console.log("Number is neagtive!");
}
