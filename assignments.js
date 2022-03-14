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

// function calcTip(bill) {
//     let precent = 300 >= bill && bill >= 50 ? 15 / 100 : 20 / 100;
//     return (bill * precent);
// }

// let bills = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(bills);

// let total = [calcTip(125) + 125, calcTip(555) + 555, calcTip(44) + 44];
// console.log(total);

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// function calcTip(bill) {
//     let precent = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.20;
//     return precent;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(calcTip(bills[i]) + bills[i]);

// }

// let calcAverage = function (arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// }

// console.log(tips);
// console.log(totals);
// console.log(calcAverage(totals));

/////////////////////////////////////////////////////////////////////

// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
'use strict';

// printForecast([12, 5, -5, 0, 4]);
// function printForecast(arr) {
//   let temperaturesString = ``;
//   for (let i = 0; i < arr.length; i++) {
//     temperaturesString += `... ${arr[i]}ºC in ${i + 1} days `;
//   }
//   console.log(temperaturesString);
// }

//////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #10

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// let players1 = [...game.players[0]];
// let [gk, ...fieldPlayers] = [...players1];
// let players2 = [...game.players[1]];

// let allPlayers = [...players1, ...players2];
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// let { team1, team2, x: draw } = game.odds;

// console.log(players1, gk, fieldPlayers, players2, allPlayers);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(team1, draw ,team2);

// const printGoals = function (...playerNames) {
//   for (let i = 0; i < playerNames.length; i++) {
//     console.log(playerNames[i]);
//   }

//   console.log(`Total scored goals are ${playerNames.length}`);
// };
// console.log(team1 || team2);
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

//////////////////////////////////////////////////////////////////////////////

// Coding Challenge #11

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);
// // // 2.
// const values = Object.values(game.odds);
// let average = 0;
// for (const value of values) {
//   average += value;
// }
// console.log(average / values.length);
// // // 3.
// const oddsKeys = Object.keys(game.odds);
// const oddsValues = Object.values(game.odds);
// const oddsKeysEntries = oddsKeys.entries();

// for (const [i, key] of oddsKeysEntries) {
//   key === 'x'
//     ? console.log(`Odd of draw:${oddsValues[i]}`)
//     : console.log(`Odd of victory ${game[key]}:${oddsValues[i]}`);
// }

// // // 4.

// const scoredEntries = game.scored.entries();
// let scored = {};
// for (const [i, player] of scoredEntries) {
//   scored.hasOwnProperty(player) ? (scored[player] += 1) : (scored[player] = 1);
// }

// console.log(scored);

/////////////////////////////////////////////////////////////////////

// Coding Challenge #12
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// GOOD LUCK �

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//01
const events = [...new Set(gameEvents.values())];
console.log(events);

//02
gameEvents.delete(64);
console.log(gameEvents);

//03
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//04
for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[FIRST HALF]  ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF]  ${key}: ${value}`);
  }
}
