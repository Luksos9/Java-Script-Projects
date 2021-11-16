'use strict'


/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice contains ${apples} apples,
     made into ${applePieces} pieces and ${oranges} oranges, made into ${orangePieces} pieces `
    return juice;
}


console.log(fruitProcessor('3','4'))
 */

/* const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2020, 'Lukasz')) */

function checkWinner (koala1Score, dolphin1Score) {
    const koalaAvg = calcAverage(koala1Score)
    const dolphinAvg = calcAverage(dolphin1Score)
    if (koalaAvg > dolphinAvg) {
        return `Koala win (${koalaAvg} vs. ${dolphinAvg})`
    } else {return `Dolphins win (${dolphinAvg} vs. ${koalaAvg})`}
}


const calcAverage = (teamScore) => {
    let scores = 0
    let step = 0
    for (step = 0; step < teamScore.length - 1; step++) {
        scores += teamScore[step]
    }
    return scores/3
}


const dolphinScore = [44, 500, 71]
const koalaScore = [65, 100, 49]

console.log(checkWinner(koalaScore, dolphinScore))