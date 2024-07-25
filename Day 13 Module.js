// Activity 1: Creating and Exporting Modules

//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

//add.js

export function add(a, b) {
  return a + b;
}

//main.js

import { add } from './add.js';

const result = add(3, 4);
console.log(result); // 7

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

//person.js

export const person = {
  name: 'John Doe',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};


//main.js

import { person } from './person.js';

person.greet(); // Hello, my name is John Doe
console.log(person.age); // 30

//Activity 2: Named and Default Exports

//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

//math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

//main.js

import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2


//Task 4:Create a module that exports a single function using default export. Import and use this function in another script.

//multiply.js

export default function multiply(a, b) {
  return a * b;
}

//main.js

import multiply from './multiply.js';

console.log(multiply(4, 5)); // 20


// Activity 3: Importing Entire Modules

//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

//utils.js
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

//main.js

import * as utils from './utils.js';

console.log(utils.PI); // 3.14
console.log(utils.add(7, 2)); // 9
console.log(utils.subtract(7, 2)); // 5


// Activity 4: Using Third-Party Modules

//Task 6:Install a third-party module (e.g., `lodash`) using npm. Import and use a function from this module in a script.

//npm install lodash


//main.js

import _ from 'lodash';

const array = [1, 2, 3, 4];
console.log(_.reverse(array)); // [4, 3, 2, 1]


//Task 7: Install a third-party module (e.g., `axios`) using npm. Import and use this module to make a network request in a script.


//main.js

import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


