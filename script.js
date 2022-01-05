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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i, arr){

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i  + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `; 

    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
}
//convert dog ages to human ages and calculate the average age of the dogs in their study

// function calcAverageHumanAge(ages){
//   const humanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4).filter((age) => age >= 18);
//   const averageHumanAge = humanAges.reduce((acc, age) => acc + age, 0) / humanAges.length;
//
//   console.log(humanAges);
//   console.log(averageHumanAge);
// }
//
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const calcAverageHumanAge = ages => ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4).filter((age) => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section  so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsJulia2 = [9,16, 6, 8, 2];
// const dogsKate1 = [4, 1, 15, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = (julie, kate) => {
//   const correctedJulie = julie.slice(1, -2);
//   const correctedKate = kate.slice(1, -2);

//   for(const [idx, dog] of correctedJulie.entries()){
//     console.log(`Dog number ${idx} is ${dog > 3 ? 'an adult' : 'still a puppy'}`);
//   }

//   console.log(`old julie: ${julie}\n
//   new julie: ${correctedJulie}\n
//   old kate: ${kate}\n
//   new kate: ${correctedKate}`);
// }

// checkDogs(dogsJulia1, dogsKate1);
// checkDogs(dogsJulia2, dogsJulia2);

// const eurToUsd = 1.1;

// const movementToUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementToUSD); 

// const user = 'Steven Thomas Williams';

//Maximum value
const maxValue = movements.reduce((acc, mov) => mov > acc ? mov : acc, 0);
console.log(maxValue);


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
}

const createusernames = function(accs){

  for(const acc of accs){
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  }
}

function updateUI(acc){
  //Display movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
}

const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter((int, i, arr) => int >= 1).reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}`
}

createusernames(accounts);

const deposits = movements.filter((mov) => mov >= 0);
const withdrawals = movements.filter((mov) => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);

//accumulator is like a snowball
const balance = movements.reduce(function (acc, cur, i, arr){
  return acc + cur;
}, 0);
console.log(balance);

//find method
// const firstWithdrawal = movements.find(mov => mov < 0);
//
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let jd = null;
// for(const acc of accounts){
//   if(acc.owner === 'Jessica Davis'){
//     const jd = acc;
//     break;
//   }
// }
// console.log(jd);

// Event handler

let currentAccount;

btnLogin.addEventListener('click', function (e){
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display ui and welcome
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
  }

  //Clear input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  updateUI(currentAccount);

  // //Display movements
  // displayMovements(currentAccount.movements);
  //
  // //Display Balance
  // calcDisplayBalance(currentAccount);
  //
  // //Display summary
  // calcDisplaySummary(currentAccount);

});

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  if(amount > 0 && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username && receiverAcc){
    console.log('Transfer valid');
    receiverAcc.movements.push(Number(inputTransferAmount.value));
    currentAccount.movements.push(Number(inputTransferAmount.value) * -1);
    console.log(receiverAcc, currentAccount);
  }

  updateUI(currentAccount);
});

btnClose.addEventListener('click', function (e){
  e.preventDefault();

  if(currentAccount.username === inputCloseUsername.value &&
      currentAccount.pin === Number(inputClosePin.value)){
    console.log('delet');

    inputCloseUsername.value = inputClosePin.value = '';

    //get index of account to be deleted
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    //delete account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;

  } else {
    console.log('fail');
    console.log(currentAccount.username, inputCloseUsername.value, currentAccount.pin, inputClosePin.value);
  }


})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }

})

console.log(accounts);

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})