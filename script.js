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

let language;

switch (language) {
    case "chinese":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}