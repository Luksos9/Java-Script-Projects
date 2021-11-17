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
/* 
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

console.log(checkWinner(koalaScore, dolphinScore)) */

/* const friends = ['michael', 'steven', 'peter']

const years = new Array(1991, 1992, 1993, 1994)


console.log(friends.length)
console.log(years)

friends[2] = 'Jay-Z'
console.log(friends)

const a = friends.pop()

console.log(a)
console.log(friends)

console.log(friends.shift())
console.log(friends.indexOf('michael'))
console.log(friends.includes('steven'))
console.log(friends.includes('steven')) */

/* const calcTip = (bills) => {
    let tips = []
    let step = 0
    let total = []
    console.log(total)
    for (step; step <= bills.length-1; step++) {
        if (bills[step] >= 50 && bills[step] <= 300) {
            tips.push(0.15*bills[step])
            total.push(bills[step] + tips[step])
        } else {
            tips.push(0.2*bills[step])
            total.push(bills[step] + tips[step])
        }
    }
    return `For first one, the tip is ${tips[4]} and total value is ${total[4]}\nFor second one, the tip is ${tips[1]} and total value is ${total[1]}\nFor third one, the tip is ${tips[2]} and total value is ${total[2]}`
} 

const bills = [125, 555, 44, 80, 100]

console.log(calcTip(bills)) */

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    kids: ['Michael', 'Peter', 'Steven']
}

console.log(jonas)