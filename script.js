'use strict'


// FUnction expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//Arrow function
const calcAge3 = birthYear => {
    const age = 2037 - birthYear;
    const retire = 65 - age;
    return retire
};

console.log(calcAge3(2020))

