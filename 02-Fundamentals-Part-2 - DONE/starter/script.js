"use strict";
/*



let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;


function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

const num = Number("23");

// function declaration
function calcAgel(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAgel(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// code the hardway
const dec = function (val) {
  const num = 2037;
  const result = num - val;
  return result;
};
const Res = dec(1991);
console.log(Res, "Notepad++");


//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
  return juice;
}
const res = fruitProcessor(2, 3);
console.log(res);


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years🎉.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));

// Function challenge
// Arrow function
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// normal function
const calcAverage = function(score1,score2,score3){
  const avgScore = (score1+score2+score3)/3
  return avgScore
}

const scoreDolphins =  calcAverage(44,23,71);
const scoreKoalas =  calcAverage(23,34,27);

const checkWinner = function(avgScoreDolphins,avgScoreKoalas){
      if (avgScoreDolphins > (avgScoreKoalas*avgScoreKoalas)){
      console.log(`Dolphins win(${avgScoreDolphins} vs. ${avgScoreKoalas}`);
  } else  if (avgScoreDolphins*avgScoreDolphins < avgScoreKoalas){
      console.log(`Koalas win(${avgScoreKoalas} vs. ${avgScoreDolphins}`);
  } else {
      console.log("No team wins...");
  }
}


console.log(checkWinner(avgScoreDolphins,avgScoreKoalas));


// Arrays in JavaScripts
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Jonas";
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// function declaration
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const year = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(year));

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);


const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];
// add element to the end of the Array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// add to the beginning of the array
friends.unshift("John");
console.log(friends);

//remove last element of the array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// remove element from 0th position
friends.shift("John");
console.log(friends);

// get the index position of a value in the array
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // -1 if absent
// modern way of getting the index
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


// CHALLENGE 2
const calcTip = function(bill){
    // const val = [bill]
    if(bill >= 50 && bill <=300){
        const tip = bill*(15/100);
        return tip;
    } else{
        const tip = bill*(20/100);
        return tip;
    }
}

const bills = [125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(totals);

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName,  lastName,  age, job, and friends"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request!");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Micheal"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //calcAge: function (birthYear) {
  //  return 2037 - birthYear;
  //},
  //   calcAge: function () {
  //     // coconsole.log(this);
  //     return 2037 - this.birthYear;
  //   },
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
//console.log(jonas["calcAge"](1991));
// Challenge;
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// CHALLENGE #3
// mark's Object
const  mark = {
  fullName: "Mark Miller",
  mass: "78",
  height: "1.69",
  
  calcBMI: function(){
      this.bmi = this.mass/(this.height*this.height)
      return this.bmi ;
  }
}

// john's object
const  john = {
      fullName: "John Smith",
      mass: "92",
      height: "1.95",
 
  calcBMI: function(){
     this.bmi =  this.mass/(this.height*this.height)
       return this.bmi;
  }     
      
};

// control flow and decision
if(mark.calcBMI()>john.calcBMI()){
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})!`);
} else if(mark.calcBMI()<john.calcBMI()){
   console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})!`);
}
*/

//Iteration: The for loop
/*
console.log("Lifting weights repetition 1 🏋️");
console.log("Lifting weights repetition 2 🏋️");
console.log("Lifting weights repetition 3 🏋️");
console.log("Lifting weights repetition 4 🏋️");
console.log("Lifting weights repetition 5 🏋️");
console.log("Lifting weights repetition 6 🏋️");
console.log("Lifting weights repetition 7 🏋️");
console.log("Lifting weights repetition 8 🏋️");
console.log("Lifting weights repetition 9 🏋️");
console.log("Lifting weights repetition 10 🏋️");


// for loop keeps running while condition is TRUE
for (let rep = 5; rep <= 10; rep++)
  console.log(`Lifting weights repetition ${rep} 🏋️`);

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("___ ONLY STRINGS ___");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

// continue and break
console.log("___ BREAK WITH NUMBER ___");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "number") continue;
  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ....,4
//4, 3,....,0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`\n------ Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}🏋️`);
  }
}


// while loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Lifting weight repetition ${exercise}🏋️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weight repetition ${rep}🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random()) * 6 + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// for loop CHALLENGE 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}
console.log(tips);
console.log(totals);
*/
