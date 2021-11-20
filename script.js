'use strict';

/* const x = 23;
 */
/* const calcAge = birthYear => {
  cl(`${birthYear} xdaasda`);
};

console.log(`asdad`); */

/* const temperatures1 = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

let container = 0;

for (let num = 0; num <= temperatures.length; num++) {
  if (temperatures[num] !== Number) {
    continue;
  } else {
    if (temperatures[num] > temperatures[num + 1]) {
      container = temperatures[num];
    } else {
      continue;
    }
  }
}

console.log(container);
 */
/* 
const calcTempAplitude = function (templs) {
  let max = templs[0];
  for (let i = 1; i < templs.length; ++i) {
    if (templs[i] > max) {
      max = templs[i];
    }
  }
  return max;
};
 */

/* const temperatures1 = [3, -2, -6, -1, 'error'];
const temperatures2 = [9, 13, 17, 15, 14, 9, 5];
const temperatures = [];
temperatures.push(...temperatures1, ...temperatures2);
console.log(temperatures);
console.log(Math.max(...temperatures2));

const calcTempAplitude = function (temperatures) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];
    if (typeof curTemp !== 'number') continue;
    if (max < curTemp) {
      max = curTemp;
    }
    if (min > curTemp) {
      min = curTemp;
    }
  }
  return max - min;
};

const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

// Problem 2, we have more arrays, how to gandle it?
// answer - just merge them together */

/* const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celcius:')),
  };

  console.log(measurment);
  console.table(measurment);
  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());
 */

const temperatures = [17, 21, 23];

// What is a problem?
// i have an array and want to display each temperature for each day
// 1. I have to get position of each element as it will be a day
// 2. I have to log to console a temp and a day

function printForecast(arr) {
  let final = ``;
  for (let i = 0; i < arr.length; i++) {
    final += `${arr[i]} oC in ${i + 1} days `;
  }
  return final;
}

console.log('heheh');
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
