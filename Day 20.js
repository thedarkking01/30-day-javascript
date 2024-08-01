// Activity 1: Understanding LocalStorage

//Task 1: Write a script to save a string value to `localStorage` and retrieve it. Log the retrieved value.

// Task 1
localStorage.setItem('myString', 'Hello, LocalStorage!');
let retrievedString = localStorage.getItem('myString');
console.log(retrievedString); // Output: Hello, LocalStorage!


//Task 2: Write a script to save an object to `localStorage` by converting it to a JSON string. Retrieve and parse the object, then log it

// Task 2
let myObject = { name: 'John Doe', email: 'john@example.com' };
localStorage.setItem('myObject', JSON.stringify(myObject));
let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject); // Output: { name: 'John Doe', email: 'john@example.com' }


// Activity 2: Using LocalStorage

//Task 3: Create a simple form that saves user input (e.g., name and email) to `localStorage` when submitted. Retrieve and display the saved data on page load.


// <!-- HTML Form -->
// <form id="localStorageForm">
//   <input type="text" id="name" placeholder="Name" required>
//   <input type="email" id="email" placeholder="Email" required>
//   <button type="submit">Save</button>
// </form>

// <div id="displayData"></div>

// <script>
// // Task 3
// document.getElementById('localStorageForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let userData = { name: name, email: email };
//   localStorage.setItem('userData', JSON.stringify(userData));
//   displayData();
// });

// function displayData() {
//   let userData = JSON.parse(localStorage.getItem('userData'));
//   if (userData) {
//     document.getElementById('displayData').innerText = `Name: ${userData.name}, Email: ${userData.email}`;
//   }
// }

// window.onload = displayData;
// </script>


//Task 4: Write a script to remove an item from `localStorage`. Log the `localStorage` content before and after removal.

// Task 4
console.log('Before removal:', localStorage.getItem('userData')); // Log before removal
localStorage.removeItem('userData');
console.log('After removal:', localStorage.getItem('userData')); // Log after removal


// Activity 3: Understanding SessionStorage

//Task 5: Write a script to save a string value to `sessionStorage` and retrieve it. Log the retrieved value.

// Task 5
sessionStorage.setItem('mySessionString', 'Hello, SessionStorage!');
let retrievedSessionString = sessionStorage.getItem('mySessionString');
console.log(retrievedSessionString); // Output: Hello, SessionStorage!


//Task 6: Write a script to save an object to `sessionStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.

// Task 6
let mySessionObject = { name: 'Jane Doe', email: 'jane@example.com' };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
let retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(retrievedSessionObject); // Output: { name: 'Jane Doe', email: 'jane@example.com' }


// Activity 4: Using SessionStorage

//Task 7: Create a simple form that saves user input (e.g., name and email) to `sessionStorage` when submitted. Retrieve and display the saved data on page load.


// <!-- HTML Form -->
// <form id="sessionStorageForm">
//   <input type="text" id="sessionName" placeholder="Name" required>
//   <input type="email" id="sessionEmail" placeholder="Email" required>
//   <button type="submit">Save</button>
// </form>

// <div id="sessionDisplayData"></div>

// <script>
// // Task 7
// document.getElementById('sessionStorageForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   let name = document.getElementById('sessionName').value;
//   let email = document.getElementById('sessionEmail').value;
//   let userData = { name: name, email: email };
//   sessionStorage.setItem('sessionUserData', JSON.stringify(userData));
//   displaySessionData();
// });

// function displaySessionData() {
//   let userData = JSON.parse(sessionStorage.getItem('sessionUserData'));
//   if (userData) {
//     document.getElementById('sessionDisplayData').innerText = `Name: ${userData.name}, Email: ${userData.email}`;
//   }
// }

// window.onload = displaySessionData;
// </script>


//Task 8: Write a script to remove an item from `sessionStorage`. Log the `sessionStorage` content before and after removal.


// Task 8
console.log('Before removal:', sessionStorage.getItem('sessionUserData')); // Log before removal
sessionStorage.removeItem('sessionUserData');
console.log('After removal:', sessionStorage.getItem('sessionUserData')); // Log after removal


//Activity 5: Comparing LocalStorage and SessionStorage

//Task 9: Write a function that accepts a key and a value, and saves the value to both `localStorage` and `sessionStorage`. Retrieve and log the values from both storage mechanisms.

// Task 9
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(`LocalStorage: ${localStorage.getItem(key)}`);
  console.log(`SessionStorage: ${sessionStorage.getItem(key)}`);
}

saveToBothStorages('sharedKey', 'Shared Value');


//Task 10: Write a function that clears all data from both `localStorage` and `sessionStorage`. Verify that both storages are empty.


// Task 10
function clearAllStorages() {
  localStorage.clear();
  sessionStorage.clear();
  console.log('LocalStorage after clear:', localStorage.length); // Should be 0
  console.log('SessionStorage after clear:', sessionStorage.length); // Should be 0
}

clearAllStorages();
