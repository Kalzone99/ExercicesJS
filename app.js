//alert('Hello There');
//console.log("I am in the console");

//let myName = 'Kevin';
//console.log(myName);
//alert(myName);

//let exancheRate = 0.93;
//console.log(50 * exancheRate);
//console.log(132 * exancheRate);
//exancheRate = 0.91;
//console.log(50 * exancheRate);
//console.log(132 * exancheRate);

//04B.practice
//var a = "3";
//var b = "8";
/***********Do not change the code above 👆*******/
//Write your code here :
//var c = a;
//a = b;
//b = c;
/***********Do not change the code below 👇*******/
//console.log("a is " + a);
//console.log("b is " + b);

//06B.practice
// DON'T TOUCH THIS LINE!
//const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
//console.log(message.toLowerCase().trim());
/*
let word = "Dumbledore";
let lastIndex = word.length -1
console.log(word[lastIndex]);
word = "supercalifragilisispektiquelquechoz";
lastIndex = word.length -1;
console.log(word[lastIndex]);

Not very happy with this one tho 
*/
/*
// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5,10).replace("o", "e");

console.log(facialHair);
*/

//07Numbers oh my float

/*let x = Math.floor(Math.random() * 11);
console.log(x);
let y = Math.random() * 4 + 1;
console.log(y)
*/

//08.Practice
/*const nomination = prompt("What is your name?");
const age = prompt("How old are you?");
const home = prompt("Where do you live?");

alert(`This here is ${nomination}, she/he is ${age} years old, and is coming from ${home}`);
*/
/*const ask = prompt("Enter the price without VAT, please: ");
let vat = parseFloat(ask)+ parseFloat(ask) * 21 / 100;
vat = vat.toFixed(2);
alert(`The price including VAT is ${vat}`);
*/
/*const radius = prompt("Enter the radius of the circle: ");
const pi = 3.14
let surface = radius ** 2 * pi
alert(`The surface of the circle is ${surface}`);
*/
//Addition
/*const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter second number: ");
let addition = parseFloat(firstNumber) + parseFloat(secondNumber);
alert(`The result is:  ${addition}` );*/
//Substraction
/*const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter second number: ");
let substraction = parseFloat(firstNumber) - parseFloat(secondNumber);
alert(`The result is:  ${substraction}` );*/
//Multiplication
/*const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter second number: ");
let multiplication = parseFloat(firstNumber) * parseFloat(secondNumber);
alert(`The result is:  ${multiplication}` );*/
//Division
/*const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter second number: ");
let division = parseFloat(firstNumber) / parseFloat(secondNumber);
alert(`The result is:  ${division}` );*/
//all of the above
/*const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter second number: ");
let addition = parseFloat(firstNumber) + parseFloat(secondNumber);
let substraction = parseFloat(firstNumber) - parseFloat(secondNumber);
let multiplication = parseFloat(firstNumber) * parseFloat(secondNumber);
let division = parseFloat(firstNumber) / parseFloat(secondNumber);
alert(`${firstNumber} + ${secondNumber} = ${addition}\n${firstNumber} - ${secondNumber} = ${substraction}\n${firstNumber} * ${secondNumber} = ${multiplication}\n${firstNumber} / ${secondNumber} = ${division}`);
*/


//conditionals
/*let user = "employee"

if (user == "guest") {
    console.log("Login denied")
} else if (user == "employee") {
    console.log("Succesfully logged in")
}*/
/*
let myName = "Kevin"

let myNameLength = myName.length

if (myNameLength > 5) {
    alert("More than 5 letters");
} else if (myNameLength === 5) {
    alert("Exactly 5 letters");
} else {
    alert("Less than 5 letters");
}*/
/*let message = 1 > 10 ? "condition is TRUE" : "condition is FALSE";
console.log(message);

let time = "12:00"

let clock = (time <= "12:00") ? "Good Morning" : "Good Afternoon";
console.log(clock);
*/
/*let rolldice = Math.floor((Math.random()) * 6) + 1

switch(rolldice) {
    case 1 : 
        console.log("You rolled a 1!")
        break
    case 2 :
        console.log("You rolled a 2!")
        break
    case 3 : 
        console.log("You rolled a 3!")
        break
    case 4 : 
        console.log("You rolled a 4!")
        break
    case 5 :
        console.log("You rolled a 5!")
        break
    case 6 :
        console.log("You rolled a 6!")
        break
}
 let favFood = "Pizza"

 switch(favFood) {
    case "Sushi" : 
        console.log(`That's right ${favFood} is my favorite type of food!`)
        break
    case "Pasta" :
        console.log(`That's right ${favFood} is my favorite type of food!`)
        break
    case "Ramen" : 
        console.log(`That's right ${favFood} is my favorite type of food!`)
        break
    case "Hot Dog" :
        console.log(`That's right ${favFood} is my favorite type of food!`)
        break
    case "Pizza" :
        console.log(`That's right ${favFood} is my favorite type of food!`)
        break
    default :
        console.log(`${favFood} not found... I'm hungry!`)
 }*/

//11B.Exercices conditionals

/*const intro = prompt('What is your name? ')
const animal = prompt('Do you prefer cats or dogs?', 'cat or dog')

if (animal === "cat") {
    console.log(`Hello, ${intro}! Hope you will find it's purrrrfect over here!`)
} else if (animal === "dog") {
    console.log(`Hello, ${intro}! We also like good boys over here!`)
} else {
    console.log(`Howdy ${intro}! We don't dislike ${animal}s, but whatever floats your boat!`)
}
*/
/*const mystery = "Pa7rickStarfish"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
}*/
let age=prompt("Hello, how old are you?")

if (age<18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age>18) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
