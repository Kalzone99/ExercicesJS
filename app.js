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
*/
let colours = function() {
    console.log("Red, Green, Blue");
}
colours();

let myColours = colours;

myColours();