// const country = "Egypt";
// const continent = "Africa";
// let population = 120000000;
// const language = "Arabic";
// const isIsland = false;
// const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
// const average = 33000000;
// if (50000000 > population && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria`);
// }

// let language;

// switch (language) {
//     case "chinese":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
// }



// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }

// let egypt = describeCountry('egypt', 120000000, 'cairo');
// let lybia = describeCountry('lybia', 6000000, 'triplo');
// let sudan = describeCountry('sudan', 20000000, 'alkartom')
// console.log(egypt);
// console.log(lybia);
// console.log(sudan);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

// let egypt = percentageOfWorld1(120);
// let usa = percentageOfWorld1(360);
// let canada = percentageOfWorld1(30);

// console.log(egypt, usa, canada);

// let percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }

// let syria = percentageOfWorld2(33);
// let iraq = percentageOfWorld2(36);
// let sudan = percentageOfWorld2(30);

// console.log(syria, iraq, sudan);

// let percentageOfWorld3 = (population) => population / 7900 * 100;

// let syria = percentageOfWorld3(33);
// let iraq = percentageOfWorld3(36);
// let sudan = percentageOfWorld3(30);

// console.log(syria, iraq, sudan);

// let describePopulation = (country, population) => {
//     let populationPrecent = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${populationPrecent}% of the world.`;
// }

// let egypt = describePopulation("egypt", 120);
// let usa = describePopulation("usa", 360);
// let canada = describePopulation("canada", 30);

// console.log(egypt, usa, canada);

let populations = [120, 33, 144, 44];

let percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
// console.log(`${4 > populations.length - 1}`);
console.log(percentages[0]);
console.log(percentages[1]);
console.log(percentages[2]);
console.log(percentages[3]);

// let neighbours = ["Sudan", "Libya", "Palestine"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//     console.log(`Probably not a central European country :D`);
// }

// let chosen = neighbours.indexOf("Libya");
// neighbours[chosen] = "Syria";
// console.log(neighbours);

// let myCountry = {
//     country: "Egypt",
//     capital: "Cairo",
//     language: "Arabic",
//     population: 120,
//     neighbours: ["Palestine", "Sudan", "Libya"],
//     checkIsland: function () {
//         this.isIsland = this.neighbours.length > 0 ? false : true;
//     },
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million arabic-speaking people,
//         ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//     },

// }

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

///////////////////////////////////////////////////////////////

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK

// let markMiller = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.BMI = this.mass / this.height ** 2;
//     }
// }

// let johnSmith = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.BMI = this.mass / this.height ** 2;
//     }
// }
// markMiller.calcBMI();
// johnSmith.calcBMI();

// console.log(
//     `${johnSmith.BMI > markMiller ?
//         `${johnSmith.fullName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName}'s (${markMiller.BMI})`
//         : `${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})`}`
// );

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }


function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

// let populations = [120, 33, 144, 44];
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
