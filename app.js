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
}/*
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
/*let age=prompt("Hello, how old are you?")

if (age<18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age>18) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
*/
/*let fruit=prompt("Hello, what is your favorite fruit?", "banana, strawberry, grape ?").toLowerCase()

if (fruit === "banana") {
    alert("I like bananas too, and i can not lie");
} else if (fruit === "strawberry") {
    alert("I LOVE strawberries, j'adore li fraises");
} else if (fruit === "grape") {
    let color = prompt("Do you prefer purple or green grapes?", "purple or green?").toLowerCase()

    if (color === "purple"){
            alert("I don't like purple grapes");
        } else if (color === "green") {
            alert("Green grapes are okay, i guess");
        } else {
            alert("I do not understand");
        }
} else {
    alert("I do not understand the word you just said :(")
}   
*/
//Arrays
/*let countries = ["Belgium", "Canada", "Denmark"]

countries[3] = "Egypt"
console.log(countries)

let colours = ["Blue", "Red", "Yellow", ["Green", "Orange", "Purple" ]]
    
console.log(colours[3][2])
*/
/*let fruits = ["Apple", "Orange", "Banana"]
fruits.unshift("Cherry", "Pineapple")
console.log(fruits)
fruits.push("Plum", "Grapes")
console.log(fruits)
console.log(fruits.indexOf("Orange"))
fruits.splice(3, 1, "Lemon")
console.log(fruits)
fruits.sort()
console.log(fruits)*/
//12B Exercices
//const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
/*Don't do even tho it's correct
leaderboard.splice( 1, 1, "Luna")
console.log(leaderboard)
leaderboard.splice( 3, 1, "Draco")
console.log(leaderboard)
*/
/*BETTER DO
leaderboard.splice(1, 1, "Luna"); leaderboard.splice( 3, 1, "Draco") 
console.log(leaderboard)
*/
//const initialArray = [null, true, ["Apple", "two", undefined], false, ["three", "BeCode"], 4, "I am a big bad wolf", ["one"] ];
/*Don't
let flattenArray = initialArray.flat(1)
let splicedArray = flattenArray.splice(0, 3 ,"one")
let splicedArray2 = flattenArray.splice(2, 2)
let finalArray = flattenArray.slice(0,3)
console.log(finalArray)*/
/*BUT DO :*/
/*let finalArray = initialArray.flat(1); finalArray.splice( 0, 3, "One"); finalArray.splice( 2, 2); finalArray.splice( 3, 5)
console.log(finalArray)

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
/*let shiftPlanets = planets.shift()//.push("Saturn").unshift("Mercury")
let pushPlanets = planets.push("Saturn")
let unshiftPlanet = planets.unshift("Mercury")*/
/*planets.shift() ; planets.push("Saturn") ; planets.unshift ("Mercury");
console.log(planets)*/

//Objects - nice
/*const product = {
    name: "Iphone5",
    inStock: true,
    price: 1249.90,
    includedInPackage: [
        {
            gadget1: "Case",
            gadget2: "Earphones",
            gadget3: "Charger",
        },
    ],
};
console.log(product.includedInPackage[0].gadget2)

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
  };
  
  //YOUR CODE GOES DOWN HERE:
  let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
console.log(fullAddress)

const movie = {
    title: "Braveheart",
    year: 1995,
    director: "Mel Gipson",
    genre: ["action", "drama"],
    rating: 92,
  };
  
  console.log(movie.rating); // Prints 92
  
  movie.rating = 97;
  
  console.log(movie.rating); // Prints 97
  movie.popcorn = "salty";
  console.log(movie);
*/

//For Loops
/* iterrate from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
*/
/*for (let i=2; i<=20 && i%2 == 0; i+=2){
    console.log(i);
}
for (let i=1; i<=20 && i%2 == 1; i+=2){
    console.log(i);
}
for (let i=100; i !== 0 && i % 10 == 0 ; i -= 10){
    console.log(i);
}
for (let i = 25; i !== 0 && i % 5 == 0 ; i -= 5){
    console.log(i);
}
for (let i = 10 ; i <= 1000 ; i *= 10){
    console.log(i);
}*/
/*Example going through an array !!
const colors = ["blue", "red", "violet", "yellow"];
for (let i = 0; i <= colors.length - 1; i++) {
    console.log(colors[i]);
  }
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }*/

 /*   const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];

for (let i = animals.length -1  ; i >= 0 ; i--) {
    console.log(animals[i]);
}*/

/*const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
  ];

  for (let i = 0 ; i <= users.length -1 ; i++)

 console.log(`${i+1}. My full name is ${users[i].firstName} ${users[i].lastName}`);
*/

/*const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
  ];
  
  // I can use nested loops to do that :
  
  for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }
*/


/*const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
  ];
  
  // I can use nested loops to do that :
  
  for (let i = 0; i < seatingChart.length; i++) {
    console.log(`ROW #${i+1}`)
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }
*/

//17. While loops  !

/*let num = 0;

while (num < 10) {
  console.log(num);
  num++;
}*/

/*let num = 0

while (num  <= 100) {
    console.log(`The speed of the car is ${num}MPH`)
    num = num+10;
}

let a= 1
let b= 10

do {
    console.log(`The number is ${a}`)
    a++
} while (a <= b)
 */

 //18.Exercices while loop
//The machine will now ask you to pick a random number 
/* var question;
 //The machine checks if the input is correct
while (isNaN(parseInt(question = prompt("Enter a max number: "))))
{
   console.log("Input is not a number");
   alert("Please try again");   
}
//The machine will now choose a number between 1 and the max number that has been input
let random = Math.floor((Math.random()) * question)+1 
//The machine will ask to guess a number 
let playGame;
while (isNaN(parseInt(playGame = prompt(`Guess a number between 1 and the max number(${question}): `))))
{
    console.log("Input is not a number")
    alert("Please try again")
}
//initiate guess counter
let guess = 1
//Guessing game and counter loop
while (playGame != random){
            if (playGame < random) {
        alert(`The number you are looking for is ... greater than that(between ${playGame} and ${question})`)
        guess += 1;
        playGame = prompt(`Guess higher(${playGame}): `)
            } else if (playGame > random) {
        alert(`The number you are looking for is ... smaller than that(between ${playGame} and 1)`) 
        guess += 1;
        playGame = prompt(`Guess lower(${playGame}): `)
        }  
}
//Winning message in all its glory
      alert(`Hot Dog! We have a wiener !!! Congratulations ${random} was the number we were looking for and it took you ${guess} attempts!!`)
console.log(guess)
*/

//19. For ... of and For ... in
/*
const colors = ["red", "orange", "blue", "violet"];

// For loop example

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// For... of example

for (let x of colors) {
  console.log(x);
}

// For both, the result will be

/*

"red"
"orange"
"blue"
"violet"

/*
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["football", "movies", "guitar"],
};

for (let key in user) {
  console.log(key);
}
for (let key in user) {
    console.log(`${key} : ${user[key]}`);
  }
  
  // Result :
  
  
  firstName : John
  lastName : Doe
  age : 30
  hobbies : ["football", "movies", "guitar"]
  */
// 20 To Do list
//first create an empty array
/*let toDoList = [];

let command = "";
while (command !== "quit") {
    // Command prompt
    command = prompt("Input command: (new, list, delete, quit)").toLowerCase();

    // New command
    if (command === "new") {
        let newPrompt = prompt("What will be your new To Do: ?");
        if (newPrompt) {
            toDoList.push(newPrompt);
            alert(`Added "${newPrompt}" to the To Do list!`);
        } else {
            alert("No new To Do entered...");
        }

    // Listing all the To Dos in the list
    } else if (command === "list") {
        console.log("\n********* TODO LIST *********\n");
        if (toDoList.length === 0) {
            console.log("No to-dos entered yet...");
        } else {
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i + 1}. ${toDoList[i]}`);
            }
        }

    // Delete a given to-do if it exists
    } else if (command === "delete") {
        if (toDoList.length === 0) {
            alert("There is nothing to delete");
        } else {
            console.log("\nHere are your To Dos:");
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i + 1}. ${toDoList[i]}`);
            }
            
            let numberOfDelete = parseInt(prompt("Enter the number of the To Do you want to delete: "));
            let index = numberOfDelete - 1;

            if (index >= 0 && index < toDoList.length) {
                let deleted = toDoList.splice(index, 1);
                alert(`You have deleted: "${deleted[0]}`);
            } else {
                alert("Not a valid number");
            }
        }

    // Quit command
    } else if (command === "quit") {
        alert("Bye bye!");

    // Invalid command
    } else {
        alert("Invalid command, please try again");
    }
}*/

//21.Functions

/*function sing (){
    console.log("DO");
    console.log("RE");
    console.log("MI");
    console.log("FA");
    console.log("SOL");
    console.log("LA");
    console.log("SI");
}
sing()*/

/*function myName() {
    console.log("Kevin");
}
myName();
myName();
myName();

let colours = function() {
    console.log("Red, Green, Blue");
}
colours();

let myColours = colours;

myColours();

function favFood(response) {
    if (response === undefined) {
        console.log("Please, enter your favorite food: ")
    } else {
        console.log(`Your favorite food is ${response}`);
    }
}
favFood("pizza");
*/
/*function favNum(num){
    return (num);
}
console.log(`My fav number is: ${favNum()}`);
let favNum = function(num) {
    return (num);
}
console.log(`My fav number is: ${favNum(21)}`);*/

//21B Exercices

/*function roll(faces, times){
    
    for (let i=1 ; i <= times; i++){
            let result = Math.floor((Math.random()) * faces + 1)
            console.log(`Die ${i}: ${result}`);
    }
}
roll(6,3);*/
/*
repeat("$", 5);
// expected result : "$$$$$"

function repeat (toMultiply, times) {
    
    toMultiply = String(toMultiply)
    if (typeof times === "number") {
        console.log(`${toMultiply.repeat(times)}`);
    } else if (typeof times !== "number" || times === undefined) {
        console.log("The second parameter is not a number, try again");
    }
}
repeat("g", 56)*/
/*
greet("Marlon", "Brandon");

// expected result : "This is Marlon B."*/
/*function greet(firstName, lastName) {

    firstName = String(firstName);
    lastName = String(lastName);
    
    let lastNameToArray = lastName.split('');
    console.log(`This is ${firstName} ${lastNameToArray[0]}.`)
}
greet ("Kevin", "Selvais")*/

/*const myVariable = sum(3, 6);
console.log(myVariable);

// Expected result : 9*/
/*function sum(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 + num2);
    } else if (typeof num1 !== "number" || num1 === undefined || typeof num2 !== "number" || num2 === undefined) {
        console.log("one or the two parameter(s) is/are incorrect, try again");
    }
    
}
const mySum = sum(3, 6)
console.log(mySum);

sum(3,6)
// to get the variable to work do not set the parameters whitin the parenthesis like this =>
let mySumBis = sum;
sum(3,6)*/

//Mental Exercice
/*function logs() {
    console.log("Hello");
    console.log("World");
    return 4;
    console.log("Goodbye");
    console.log("World");
  }
  //This next line CALLS the function so the 2 logs "Hello" and "World" will log returning the 4 
  //after that the last 2 logs will not execute (return exits the fct) 
const myVariable = logs();
  //This next line will log what the function returned, the 4 and not the 2 logs "Hello" and "World"
console.log(myVariable);*/

//is Short weather or not?
/*isShortWeather(13); // false
isShortWeather(27); // true
isShortWeather(-7); // false*/
/*function isShortWeather(temp) {
    temp = parseInt(temp);
    if (temp < 24) {
        console.log(false);
    } else {
        console.log(true);
        
    }
    
}

isShortWeather(24)
*/
// last element of an array
/*lastElement([3, 5, 7]); //7
lastElement([1]); //1
lastElement([]); //null*/
/*function lastElement(singleArray) {
   let lastIndex = (singleArray.length - 1)
   if (lastIndex < 0){
    console.log("null")
   } else {
   console.log(singleArray[lastIndex])
   }
}
lastElement([1])*/

//capitalize
/*function capitalize(inputString) {
    //charAt(0).toUpperCase() will only return the first letter capitalized + slice at 1 index gives the rest of the string
    let capitalFirst = inputString.charAt(0).toUpperCase() + inputString.slice(1); 
    console.log(capitalFirst)
}
capitalize("kevin")*/

//Sum array
/*
function sumArray(singleArray) {
    let total = 0
    for (let i = 0 ; i < singleArray.length ; i++) {
        total = total + singleArray[i]
    }
    console.log(total)
}
sumArray([1,2,3,4,5,6,7,8,9])*/

//return Day
/*
function returnDay(numberChoice){
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
if (numberChoice < 1 || numberChoice > 7 || isNaN(numberChoice) || typeof numberChoice === "boolean"){
    console.log("null")
} else {
    console.log(`${week[numberChoice - 1]}`);
}
}
returnDay(1);*/

//22 Scope

/*const i = "Hello World";

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
const hello = "Hello";

function myFunc() {
  const hello = "something else";
  console.log(hello);
}

myFunc();

for (let hello = 0; hello < 3; hello++) {
  console.log(hello);
}

console.log(hello);*/
/*let animal = "dog";

function animalWatch() { //declared but never read!!!
  let animal = "cat";
}

animalWatch();
console.log(animal);*/
/*let animal = "dog";

function animalWatch() {
  animal = "cat"; // reassigned "cat" to variable dog so it works outside not like a variable in local scope/block
}

animalWatch();
console.log(animal);*/
// Amit tasks
//1

/*
function call() {
    let firstName = "Kevin" ; 
    let lastName = "Selvais";
    let age = 44;
    let country = "Belgium";
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
}
call()
 let firstName = "James";
call();

let game = 'Sonic'
if (true) {
    let game = 'Mario';
    console.log(game);
}

console.log(game);*/
//2
/*book("Dune");

function book(title){
    console.log(`The book is called ${title}`);
}
*/
//23. Javascript Function expressions  // Higher order functions 
/*const callTwice = function (func) {
    func();
    func();
  };
  
  // Here, the callTwice function takes another function as a parameter and call it two times
  
  const rollDie = function () {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
  };
  
  callTwice(rollDie);*/
/*const callXTimes = function(func, numberInput){
    console.log(`Throwing ${numberInput} times the die ...`)
    // or for (let i=1 ; i <= numberInput ; i++) tant que i n'est pas le même nombre en gros le suivant fonctionne comme l'index => juste inférieur au numéro car on commence de zéro
    for (let i=0; i < numberInput ; i++) {        
            func();
        } 
}
 
const rollDie = function () {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
};
callXTimes(rollDie, 9);
*/
//24. Methods
/*
Little exercise :

Create an object called user;
Give him a fistName, a lastName and age;
Give him a method printAge and aYearHasPast
aYearHasPast should add 1 to the age property.
printAge should console.log (firstName) (lastName) is (age) years old
Play in your console to print his age and then increment his age.
*/
/*
const user ={
    firstName: "Wayne",
    lastName: "Gretzky",
    age: 63,
    printAge: function() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`)
    },
    aYearHasPast: function() {
        this.age += 1
    }
}
console.log(user);
console.log(user.age);
user.printAge();
user.aYearHasPast();
console.log(user.age);
*/
// Amit tasks
/*function user(name) {
    return `My name is ${name}`
}
console.log(user("Kevin"))
const user2 = name2 => `My name is ${name2}`
console.log(user2("Bob"));*/
/*const greeting = function() {
    console.log(`Hello!, how are you?`)
}
greeting()
const greeting = () => console.log(`Hello! how are you?`);
greeting()*/

/*let book = {
    title: "The fellowship of the Ring",
    related: function() {
        this.related.forEach(function (relatedBooks) {
            console.log(`Title: ${this.title}`);
            console.log(`Related books: ${relatedBooks}`);
        });
    }
}*/

let book = {
    title: "The fellowship of the Ring",
    related: ["The Two Towers, The Return Of The King"],
    showRelated: function() {
        this.related.forEach((relatedBooks) => {
            console.log(`Title: ${this.title}`);
            console.log(`Related books: ${relatedBooks}`);
        });
    },
}
book.showRelated();
