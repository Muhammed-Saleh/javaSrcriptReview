const country = "Egypt";
const continent = "Africa";
let population = 130;
const language = "Arabic";
const isIsland = false;
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
const average = 33000000;
let varition;
if (population > average) {
    varition = population - average;
    console.log(`${country}'s population is above ${average}`);
} else {
    varition = average - population;
    console.log(`${country}'s population is ${varition} below ${average}`);
}
