const country = "Egypt";
const continent = "Africa";
let population = 120000000;
const language = "Arabic";
const isIsland = false;
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
const average = 33000000;
if (50000000 > population && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria`);
}

