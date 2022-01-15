'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov} €</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => (acc += curr), 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(val => val > 0)
    .reduce((acc, curr) => (acc += curr));

  const outcomes = acc.movements
    .filter(val => val < 0)
    .reduce((acc, curr) => (acc += curr));

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${-outcomes} €`;
  labelSumInterest.textContent = `${intrest} €`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;
// Handle login
btnLogin.addEventListener('click', function (e) {
  // Prevent from insta submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    // With this one the UI will show
    containerApp.style.opacity = 100;
    // Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // What user has entered
  const amount = Number(inputTransferAmount.value);
  // TO whm user wants to transfer
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // Now we add negative num to user
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = '';
  }
});

// Bank will give a deposit of 10 % of biggest deposit
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  const checkIfCanLoan = currentAccount.movements.some(
    mov => amount <= 0.1 * mov
  );
  if (checkIfCanLoan && amount > 0) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  } else alert('Wrong input!');
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  console.log(`Delete`);
  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account from all accounts
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  } // CLear input fields
  inputClosePin.value = inputCloseUsername.value = '';
});

// We add state variable to check if we sorted or not
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 */
/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(arr.splice(2));
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(' - '));
 */
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// GETTING THE LAsT ELEMENT
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
 */
/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-------FOR EACH---------`);

// movement is current element
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
 */
/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
 */
/* 


console.log(`------------------------------`);
const euroToUsd = 1.1;

const movementsUSD = movements.map(movements => movements * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (movement, i, arr) =>
    `Movement ${i + 1}: You ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}`

  /*   if (movement > 0) {
    return `Movement ${i + 1}: You deposited ${movement}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
  } */
/* );

console.log(movementsDescriptions);
 */
/* 

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(wit => wit < 0);

console.log(withdrawals);

// accumulator is like a Snowball
const balance = movements.reduce((acc, curr) => (acc += curr), 0);

console.log(balance);
 */

/* // Maximum value of movements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maxVal = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(maxVal);
 */
/* const movements = [5, 2, 4, 1, 15, 8, 3];

const calcAvarageHumanAge = movements
  .map((movement, i, arr) => {
    if (movement <= 2) {
      return 2 * movement;
    } else {
      return 16 + movement * 4;
    }
  })
  .filter(year => year > 18)
  .reduce(function (acc, mov, arr) {
    acc += mov;
    return acc;
  });
console.log(calcAvarageHumanAge); */

// calcAvarageHumanAge([16,6,10,5,6,1,4])
/* 
const calcAvarageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAvarageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUSD = movements
  .filter((val, ind, arr) => val > 0)
  .map((val, ind, arr) => {
    // console.log(arr);
    return val * 1.1;
  })
  .reduce((acc, curr, ind, arr) => acc + curr);

console.log(Math.round(totalDepositUSD));
 */
/* console.log(`----------------------`);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal); // -400

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
 */
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130)); // true
console.log(movements.includes(-131)); // false

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(`EVERY`);
console.log(movements.every(mov => mov > 0)); // False (bo wystepuja negatywne)

console.log('Callback');
// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/* 
// flattens one level deeper
const arr = [[1, [2, 3]], [4, [5, 4], 6], 7, 8];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// This allows us to store in Map all accounts movement's
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements); /* (29) [200, 450, -400, 3000, 
-650, -130, 70, 1300, 5000, 3400, -150, -790, 
-3210, -1000, 8500, -30, 200, -200, 340, -300, 
-20, 50, 400, -460, 430, 1000, 700, 50, 90] */
/* 
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap

const calcBalance2 = accounts.flatMap(acc => acc.movements);

console.log(calcBalance2);
 */
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// return < 0, A, B
// reutrn > 0, B, A
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(movements);

console.log(`---------ASCENDING----`);
// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b < a) return 1;
});

console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(1, 3, 5);
console.log(x); // [pusty × 3, 1, 1, pusty × 2]

arr.fill(23, 2, 6);
console.log(arr); // [1, 2, 23, 23, 23, 23, 7, 8]

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //[1, 2, 3, 4, 5, 6, 7]

// Array with 100 random dice rolls
const diceRoll = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(diceRoll);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);
});

console.log('------------------------');
/* 
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);
 */

// 2

/* const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(dep => dep > 1000).length;

console.log(numDeposits1000);
 */

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

let a = 10;
console.log(++a);
console.log(a);

// 3.
const sums = account
  .flatMap(acc => accounts.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposit: 0, withdrawals: 0 }
  );
