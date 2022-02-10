let marksWeightInKg = 78;
let jhonsWeightInKg = 92;
let marksHeightInM = 1.69;
let jhonsHeightInM = 1.95;

// let marksWeightInKg = 95;
// let jhonsWeightInKg = 85;
// let marksHeightInM = 1.88;
// let jhonsHeightInM = 1.76;

const marksBMI = marksWeightInKg / marksHeightInM ** 2;
const jhonsBMI = jhonsWeightInKg / (jhonsHeightInM * jhonsHeightInM);


if (marksBMI > jhonsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than Jhon's (${jhonsBMI})`);
} else {
    console.log(` Jhon's BMI (${jhonsBMI}) is higher than Mark's (${marksBMI})`);
}