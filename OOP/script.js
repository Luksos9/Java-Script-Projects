'use strict';

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // 1)Public fields
  _movements = [];
  locale = navigator.language;

  // 2)Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    //this.movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  // 4) Private methods
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`helper`);
  }
}

const acc1 = new Account('Luki', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//console.log(acc1.#movements);
//console.log(acc1.#pin);
console.log(acc1._approveLoan(100));
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
