// let marksWeightInKg = 78;
// let jhonsWeightInKg = 92;
// let marksHeightInM = 1.69;
// let jhonsHeightInM = 1.95;

// let marksWeightInKg = 95;
// let jhonsWeightInKg = 85;
// let marksHeightInM = 1.88;
// let jhonsHeightInM = 1.76;

// const marksBMI = marksWeightInKg / marksHeightInM ** 2;
// const jhonsBMI = jhonsWeightInKg / (jhonsHeightInM * jhonsHeightInM);


// if (marksBMI > jhonsBMI) {
//     console.log(`Mark's BMI (${marksBMI}) is higher than Jhon's (${jhonsBMI})`);
// } else {
//     console.log(` Jhon's BMI (${jhonsBMI}) is higher than Mark's (${marksBMI})`);
// }

// let numNeighbours = prompt('How many neighbour countries does your country have ? ');
// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }

// let dolphinsAvarage = (96 + 108 + 89) / 3;
// let koalasAvarage = (88 + 91 + 110) / 3;

// if (dolphinsAvarage > koalasAvarage) {
//     console.log(`Koalas scored ${koalasAvarage} ؛ Dolphins scored ${dolphinsAvarage} Dolphins win`);
// } else if (koalasAvarage > dolphinsAvarage) {
//     console.log(`Dolphins scored ${dolphinsAvarage} ؛ Koalas scored ${koalasAvarage} Koalas win`);
// } else {
//     console.log(`They draw`);
// }


// // Bouns 01
// let dolphinsAvarage = (97 + 112 + 101) / 3;
// let koalasAvarage = (109 + 95 + 123) / 3;

// if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
//     console.log(`Koalas scored ${koalasAvarage} ؛ Dolphins scored ${dolphinsAvarage} Dolphins win`);
// } else if (koalasAvarage > dolphinsAvarage && koalasAvarage >= 100) {
//     console.log(`Dolphins scored ${dolphinsAvarage} ؛ Koalas scored ${koalasAvarage} Koalas win`);
// } else {
//     console.log(`They draw`);
// }

// Bouns 02
// let dolphinsAvarage = (97 + 112 + 101) / 3;
// let koalasAvarage = (109 + 95 + 106) / 3;

// if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
//     console.log(`Koalas scored ${koalasAvarage} ؛ Dolphins scored ${dolphinsAvarage} Dolphins win`);
// } else if (koalasAvarage > dolphinsAvarage && koalasAvarage >= 100) {
//     console.log(`Dolphins scored ${dolphinsAvarage} ؛ Koalas scored ${koalasAvarage} Koalas win`);
// } else if (dolphinsAvarage === koalasAvarage && dolphinsAvarage >= 100) {
//     console.log(`They draw`);
// }

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK 

let bill = 430;
let precent = 300 >= bill && bill >= 50 ? 100 / 15 : 100 / 20;
let tip = bill / precent;
let totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
