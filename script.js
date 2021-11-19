'use strict';

/* const x = 23;
 */
/* const calcAge = birthYear => {
  cl(`${birthYear} xdaasda`);
};

console.log(`asdad`); */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

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

const calcTempAplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
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
