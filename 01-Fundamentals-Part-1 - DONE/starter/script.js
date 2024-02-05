/*
let js = "amazing";
//console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Donald";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let _function = 27;
let $value = 27;
let person = "Jonas";
let PI = 3.1415;
console.log(PI);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);


////////////////////////////////////
//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);








let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";

latName = "Schmedtmann";
console.log(latName);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);


// Comparison Operators
console.log(ageJonas > ageSarah); // <, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



// // CHALLENGE #1 -------------------------
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark/(heightMark*heightMark);
let BMIJohn = massJohn/(heightJohn*heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn,markHigherBMI);


// sting literal templates
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a" + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);


// Conditional statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license🚗😁!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



// CHALLENGE #2  -------------------------
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn){
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}


if (BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}


// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // numbers are purple/move, strings are white

// Type Coercion
console.log("I am " + 23 + " years old.");
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" - "10" + 3); // 16
console.log("23" + "10" - 3); // 2307
console.log("23" * "10"); // 230
console.log("23" / "10"); // 2.3

let n = "1" + 1; // '11
n = n - 1; // 10
m = n + 1; // 11
console.log(n, m);
console.log("10" - "4" - "3" - 2 + "5"); // 15


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 1; // try '',' ',0,1, {}
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a job!");
}

let height = 1; // try '',' ',0,1, {}
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


// Equality Operators: == VS. ====
// avoid loose equality as much as you can
const age = "18";
if (age === 18) console.log("You just became and adult :D(strict)");

if (age == 18) console.log("You just became and adult :D(loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23'==23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


//Boolean Logic
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//if (hasDriversLicense && hasGoodVision) {
//  console.log("Sarah is able to drive!");
//} else {
//  console.log("Someone else should drive...");
//}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}



// CHALLENGE #3  -------------------------
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy🏆");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy🏆");
}


// The Switch Statement
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}


// repetition of the example in conditional if else statement
const day = "sunday";
if (day === "monday") {
  // day === 'monday'
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


//Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log();


// Conditional(Tenary) Operator
const age = 17;
// age >= 18;
//  ? console.log("I like to drink wine🍷")
//  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water  💧";
console.log(drink);

// conditional if-esle statement
let drink2;
if (age >= 18) {
  drink2 = "Wine 🍷";
} else {
  drink2 = "water  💧";
}
console.log(drink2);

// template literal and tenary strings
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water  💧"}`);
*/

//CHALLENGE #4
const bill = 430;

//method 1:  if-else
let tip = 0;
if (bill >= 50 || bill <= 300) {
  tip = (15 / 100) * bill;
} else if (bill < 50 || bill > 300) {
  tip = (20 / 100) * bill;
}

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//method 2: tenary
const tips = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tips}`
);
