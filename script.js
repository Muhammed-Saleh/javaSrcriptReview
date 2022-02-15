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

// let populations = [120, 33, 144, 44];

// let percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];
// console.log(`${4 > populations.length - 1}`);
// console.log(percentages[0]);
// console.log(percentages[1]);
// console.log(percentages[2]);
// console.log(percentages[3]);

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

let myCountry = {
    country: "Egypt",
    capital: "Cairo",
    language: "Arabic",
    population: 120,
    neighbours: ["Palestine", "Sudan", "Libya"]
}
