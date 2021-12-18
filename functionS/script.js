'use strict';

/* const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 21312315123,
};

const checkIN = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ` + passenger.name;
  if (passenger.passport === 21312315123) {
    alert('checked in');
  } else {
    alert('Wrong passport!');
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIN(flight, jonas);
 */
/* 
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase;
};

const upperFirstWOrd = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Orginal string:: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWOrd);

transformer('JavaScript is the best!', oneWord);


// JS uses callback all the time
const high5 = function () {
  console.log('LOL');
};

document.body.addEventListener('click', high5);
 */

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Lukasz');

greet('Hello')('Jonas'); */

/* const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Jonas'); */
/* 
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on: ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Lukasz Szumilas');
lufthansa.book(635, 'Lukasz Lolek');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Doesnt work
// book(23, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

/* // Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss); */
/* 
console.log('-------'.repeat(10));

// Bind method
// book.call(eurowings, 23, 'Sarah WIlliams)

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steve Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // Sets rate to 23 %

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT(100));
 */
/* 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewObject() {
    const userInput = Number(
      prompt(`Enter selected number:
    0 - JS
    1 - Pyhon
    2 - Rust
    3 - C++`)
    );
    if (userInput < 4 && userInput >= 0) {
      this.answers[userInput]++;
    } else {
      console.log(`Sorry wrong input`);
    }
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewObject.bind(poll));

const runOnce = function () {
  console.log(`This will never run again`);
};

runOnce();

// IIFE
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

console.log(isPrivate)(() => console.log(`Arrow never hehe`))();
 */
/* 
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

const someFunct = function () {
  let myScope = 0;
  return function () {
    myScope++;
    console.log(`${myScope} myScope`);
  };
};

const bookas = someFunct();

bookas();
bookas();
bookas();
bookas();
 */
/* 
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assign f function
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
 */

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
  header.addEventListener('mouseover', function () {
    header.style.color = 'yellow';
  });
  header.addEventListener('mouseout', function () {
    header.style.color = 'pink';
  });
})();
