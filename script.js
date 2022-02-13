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

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

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

let percentageOfWorld3 = (population) => population / 7900 * 100;

let syria = percentageOfWorld3(33);
let iraq = percentageOfWorld3(36);
let sudan = percentageOfWorld3(30);

console.log(syria, iraq, sudan);