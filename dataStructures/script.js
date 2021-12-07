/* 'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.categories);

console.log(restaurant.order(2, 0));

const [starter, main1] = restaurant.order(2, 0);
console.log(starter, main1);

const nested = [2, 4, [5, 6]];

const [pierwsza, , [trzecia, czwarta]] = nested;
console.log(pierwsza, trzecia, czwarta);

// Default values

const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
 */

'use strict';
/* 
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  */
// Data needed for first part of the section
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Deliver of: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be at the time ${time} to place ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIgredients) {
    console.log(mainIngredient);
    console.log(otherIgredients);
  },
};

if (restaurant.openingHours.thu) console.log(restaurant.openingHours.thu);

// WITH optional chaining
console.log(restaurant.openingHours.thu?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log(restaurant.openingHours['thu']);

for (const day of days) {
  console.log(day);
  console.log(days);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Łukasz' }];

console.log(users[0]?.name ?? 'User array empty');

const entries = Object.entries(openingHours)
console.log(entries)

for (const key, {open, close} of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}
 */
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
 */

// SPREAD, because on right side of =
/* const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2, 10, 22));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('munshrooms', 'onion', 'olives', 'spiaasd');

// Use any data type, return Any data type, short-circuting
console.log(3 || 'Jonas');

console.log(undefined || 0 || '' || 'Hello');

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------AND-------------');
console.log(0 && 'Jonas');
console.log(7 && 'hehe' && 'last');

if (restaurant.orderPizza) {
  restaurant.orderPizza('munshroos', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('munshrooms', 'spinach');
 */

/* const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator

// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);
 */

/* // CHALLENGE

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.We destructure into 2 separate arrays
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.Created 1 variable for gk and 1 array for remaining players
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3. Create allPlayers array containing all players of both teams

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Bayern used 3 substitude players, create 'players1Final' with added 3 players

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object create one variable for each odd

const { team1, x: draw, team2 } = game.odds;
// we can too
// const {odds: team1, x:draw, team2} = game;

console.log(team1);
console.log(draw);
console.log(team2);

// 6. Write a function 'printGoals'

const printGoals = function (...numPlayers) {
  console.log(`${numPlayers.length} goals were scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2
  ? console.log('Team 1 is more likely to win')
  : console.log('Team 2 is more likely to win');

for (const [i, el] of players1Final.entries()) console.log(`${i + 1}: ${el}`);
 */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const goals = game.scored;

// exercise 1

for (const [index, player] of goals.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// exercise 2

const { team1, x, team2 } = game.odds;
let sum = team1 + x + team2;
const avg = sum / 3;
console.log(avg);

const odds = Object.values(game.odds);
console.log(odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);
console.log(`--------------------------`);
console.log(`EXERCISE 3 NOW`);

// exercise 3
/* Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5 */
/* 
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `vicory ${game[team]}`;
  console.log(teamStr);
  console.log(`Odd of ${teamStr}: ${odd}`);
}
 */
/* 
const orderSet = new Set(['Pasta', 'Pizza', 'pizza', 'Risotto', 'Pasta']);
/* console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('kupa'));
console.log(orderSet.add('garlic Bread')); */

/* for (const order of orderSet) console.log(order);

console.log(`---------------------`);

const staff = ['waiter', 'chef', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

const gowno = new Set('asuduiasdshbauksdbak').size;

console.log(gowno);
 */
/* 
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

rest.set(document.querySelector('h1', 'Heading'));

/* // Convert object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap) */

// small quiz
/* const question = new Map([
  ['question', 'What is the best proggraming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😁'],
  [false, 'Try Again !'],
]);

console.log(question.get('question'));
for (const [key, value] of question.entries()) {
  if (typeof key === 'number') console.log(`Option: ${key}, Answer: ${value}`);
}

const answer = Number(prompt(`Your answer?`));

console.log(question.get(question.get('correct')));

// komparowanie correct z true
question.get(question.get('correct') === answer);

// convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log([...question.keys()]);
console.log([...question.values()]);
 */

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
/* 
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.

const [...events] = new Set(gameEvents.values());
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3

console.log(`An event occured on average: ${90 / gameEvents.size} mins`);

// 4
for (const [mins, odds] of gameEvents) {
  mins <= 45
    ? console.log(`[FIRST HALF] ${mins}: ${odds}`)
    : console.log(`[SECOND HALF] ${mins}: ${odds}`);
}
 */

/* 
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log(airline.length); // 7
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 6
console.log(airline.slice(1, 3)); // ya (czyli 3 nie jest included)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(1, -1)); // yanair Air Polsk

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s.toUpper === 'B' || s === 'E') {
    console.log('you got middle seat');
  } else console.log('you got lucky');
};

checkMiddleSeat('11b');
checkMiddleSeat('23c');
checkMiddleSeat('3E'); */
/* 
const airline = 'Ryanair Air Polska';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const fixCapitalization = userInput => {
  const passenger = userInput; // Jonas
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

console.log(fixCapitalization('jOnAs'));

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

// replacing
const priceUS = '288.97$';

const pricePLN = priceUS.replace('$', 'ZŁ');
console.log(pricePLN);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.startsWith('A')); // true
console.log(`------------`);
// Practice exercise
const checkBaggage = function (items) {
  const itemLowerCase = items.toLowerCase();
  if (itemLowerCase.includes('knife') || itemLowerCase.includes('gun')) {
    console.log('Oh my god!');
  } else {
    console.log('its fine');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('I got a socks and camera');
checkBaggage('Got some snacks and a gun for protection');


 */

/* console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  return namesUpper.join(' ');
};

const passenge = 'jessica ann smith  davis';

console.log(capitalizeName('ale z ciebie grubas'));

// Padding
const message = 'Go to gate 23!';

console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(23, ''));
 */

/* const maskCreditCard = function (number) {
  const str = number + ''; // this gives a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4337846386467384));
console.log(maskCreditCard('4337846386467384'));

// Repeat
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(5));
 */

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
 */

///////////////////////////////////////
// String Methods Practice

const getCode = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⭕' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} from ${getCode(to)} to (${time.replace(
    ':',
    'h'
  )})`.padStart(36, ' ');
  console.log(output);
}

///////////////////////////////////////