const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

let far = prompt("What is the temperature in Fahrenheit? ");//Ask the user what the current temperature is in Fahrenheit
console.log("You said the temperature is", far, "degrees Fahrenheit."); //verifies their answer
console.log("The temperature in Celsius is", (far-32)*5/9, "degrees"); //uses the conversion rate that I found online to tell the user the temperature in Celsius

//Program 2: Grade Calculator
let grade = prompt("What is your current percentage in your class? ");//Ask the user what their current percentage is to set the grade variable
if (grade > 90.0){
    console.log("Your current grade is an A!");//outputs that they have an A if their percentage is above 90
}
else if (grade > 80){
    console.log("Your current grade is a B!");//outputs that they have a B if their percentage is above 80
}
else if (grade > 70){
    console.log("Your current grade is a C.");//outputs that they have a C if their percentage is above 70
} 
else if (grade > 60){
    console.log("Your current grade is a D.");//outputs that they have a D if their percentage is above 60
}
else{
    console.log("Your current grade is an F.");//outputs that they have an F if they have anything under a 60
}
//Program 3: Leap Year Checker
let leap = prompt("What is the current year? ")//asks the user for the year to set the leap variable
if (leap === 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024){
    console.log("It is currently a leap year!");
}
else{
   console.log("It is not a leap year. Come again later.");
}
//Program 4: Largest Number Finder
let num1 = prompt("Give me a random number. ");//these three lines get the three numbers
let num2 = prompt("Give me a random number. ");
let num3 = prompt("Give me a random number. ");

if (num1 > num2){
    console.log("The largest number was " + num1 + ".")// the lines below use greater than and less than to decide which is the highest number
}

else if (num2 > num1){
    console.log("The largest number was " + num2 + ".")
}
else if (num3 > num2){
    console.log("The largest number was " + num3+ ".")
}
