// Activity 1: Template Literals

//Task 1:
// const name = "John";
// const age = 25;
// console.log(`Name: ${name}, Age: ${age}`);

//Task 2
const multiLineString = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiLineString);


//Activity 2: Destructuring

//Task 3:
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

//Task 4:
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford"
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

//Activity 3: Spread and Rest Operators

//Task 5
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

//Task 6
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); 


// Activity 4: Default Parameters

//Task 7:
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));    // Outputs: 5
console.log(multiply(5, 2)); // Outputs: 10

//Activity 5: Enhanced Object Literals

//Task 8:
const name = "sourabh";
const age = 21;

const person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet();

//Task 9:
const propName = "dynamicProperty";

const obj = {
    [propName]: "This is a dynamic property"
};

console.log(obj);

// Feature Request Scripts

//1. Template Literals Script:

const personName = "Alice";
const personAge = 30;
const greeting = `Hello, my name is ${personName} and I am ${personAge} years old.`;
console.log(greeting);

const multiLineGreeting = `This is the first line.
This is the second line.
This is the third line.`;
console.log(multiLineGreeting);


//2. Destructuring Script:
const array = [10, 20, 30, 40, 50];
const [firstValue, secondValue] = array;
console.log(`First value: ${firstValue}, Second value: ${secondValue}`);

const bookObject = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke"
};
const { title: bookTitle, author: bookAuthor } = bookObject;
console.log(`Title: ${bookTitle}, Author: ${bookAuthor}`);

//3. Spread and Rest Operators Script:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

function calculateSum(...args) {
    return args.reduce((sum, current) => sum + current, 0);
}
console.log(calculateSum(1, 2, 3, 4)); // Outputs: 10

//4. Default Parameters Script:
function add(a, b = 5) {
    return a + b;
}
console.log(add(10)); // Outputs: 15
console.log(add(10, 20)); // Outputs: 30

//5. Enhanced Object Literals Script:
const prop = "status";
const value = "active";

const user = {
    id: 1,
    name: "Bob",
    [prop]: value,
    display() {
        console.log(`User: ${this.name}, Status: ${this[prop]}`);
    }
};

console.log(user);
user.display();
