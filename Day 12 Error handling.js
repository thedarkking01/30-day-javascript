// Activity 1: Basic Error Handling with Try-Catch
//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
  try {
    throw new Error("This is an intentional error");
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

throwError();

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

console.log(divideNumbers(10, 2));  // 5
console.log(divideNumbers(10, 0));  // Error

// Activity 2: Finally Block

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function demonstrateFinallyBlock() {
  try {
    console.log("In the try block");
    throw new Error("Error in try block");
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("This will always execute, regardless of an error");
  }
}
demonstrateFinallyBlock();

//Activity 3: Custom Error Objects
//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  try {
    throw new CustomError("This is a custom error");
  } catch (error) {
    console.error("Caught a custom error:", error.message);
  }
}

throwCustomError();


//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateInput(input) {
  try {
    if (!input || input.trim() === "") {
      throw new ValidationError("Input cannot be empty");
    }
    console.log("Valid input:", input);
  } catch (error) {
    console.error("Caught a validation error:", error.message);
  }
}
validateInput("");  // Error
validateInput("Valid input");  // Valid input

// Activity 4: Error Handling in Promises.....

//Task 6: Create a promise that randomly resolves or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.
function randomPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject(new Error("Promise rejected"));
    }
  });
}
randomPromise()
  .then((message) => console.log(message))
  .catch((error) => console.error("Caught an error:", error.message));

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handlePromise() {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}
handlePromise();

// Activity 5: Graceful Error Handling in Fetch

//Task 8: Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.

fetch("https://invalid.url")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error.message));

//Task 9:Use the `fetch` API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
  try {
    const response = await fetch("https://invalid.url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchData();
