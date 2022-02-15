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

// let bill = 430;
// let precent = 300 >= bill && bill >= 50 ? 100 / 15 : 100 / 20;
// let tip = bill / precent;
// let totalValue = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);


// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK

// let calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// let avgDolhins01 = calcAverage(44, 23, 71);
// let avgKoalas01 = calcAverage(65, 54, 49);

// let avgDolhins02 = calcAverage(85, 54, 41);
// let avgKoalas02 = calcAverage(23, 34, 27);

// function checkWinner(avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log(`no team wins!`);
//     }
// }

// checkWinner(avgDolhins01, avgKoalas01);
// checkWinner(avgDolhins02, avgKoalas02);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK 


function calcTip(bill) {
    let precent = 300 >= bill && bill >= 50 ? 15 / 100 : 20 / 100;
    return (bill * precent);
}

let bills = [calcTip(125), calcTip(555), calcTip(44)];
console.log(bills);

let total = [calcTip(125) + 125, calcTip(555) + 555, calcTip(44) + 44];
console.log(total);

