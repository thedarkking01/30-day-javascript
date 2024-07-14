
// Activity 1: Variable Declaration

//Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var myNumber = 42;
console.log(myNumber);  // Output: 42


//Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let myString = "Hello, world!";
console.log(myString);  // Output: Hello, world!


// Activity 2: Constant Declaration

//Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.**
const myBoolean = true;
console.log(myBoolean);  // Output: true


// Activity 3: Data Types

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.**

let num = 10;
let str = "JavaScript";
let bool = false;
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3, 4, 5];

console.log(typeof num);  // Output: number
console.log(typeof str);  // Output: string
console.log(typeof bool);  // Output: boolean
console.log(typeof obj);  // Output: object
console.log(typeof arr);  // Output: object (arrays are objects in JavaScript)


// Activity 4: Reassigning Variables

//Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let myVar = "initial value";
console.log(myVar);  // Output: initial value

myVar = "new value";
console.log(myVar);  // Output: new value


// Activity 5: Understanding `const`

//Task 6: Try reassigning a variable declared with `const` and observe the error.

const myConst = "immutable";
// myConst = "new value";  // Uncommenting this line will cause an error: TypeError: Assignment to constant variable.
console.log(myConst);  // Output: immutable


// Feature Request Scripts

//1. Variable Types Console Log:

// Script to declare variables of different data types and log both the value and type of each variable
// var num = 42;
// let str = "Hello";
// const bool = true;
// let obj = { name: "Alice" };
// let arr = [1, 2, 3];

console.log(`num: ${num}, type: ${typeof num}`);  // Output: num: 42, type: number
console.log(`str: ${str}, type: ${typeof str}`);  // Output: str: Hello, type: string
console.log(`bool: ${bool}, type: ${typeof bool}`);  // Output: bool: true, type: boolean
console.log(`obj: ${obj}, type: ${typeof obj}`);  // Output: obj: [object Object], type: object
console.log(`arr: ${arr}, type: ${typeof arr}`);  // Output: arr: 1,2,3, type: object


//2. Reassignment Demo:

// Script to demonstrate the difference in behavior between let and const when it comes to reassignment
let myLet = "initial let value";
console.log(myLet);  // Output: initial let value

myLet = "new let value";
console.log(myLet);  // Output: new let value

// const myConst = "initial const value";
console.log(myConst);  // Output: initial const value

// Uncommenting the following line will cause an error
// myConst = "new const value";  // Error: TypeError: Assignment to constant variable.
