// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book and log it

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);


//Task 2: Access and log the title and author properties
console.log("Title:", book.title);
console.log("Author:", book.author);


// Activity 2: Object Methods

//Task 3: Add a method to return a string with the book's title and author
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());

//Task 4: Add a method that updates the book's year property
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(2021);
console.log(book);


// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library and log it
let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        book
    ]
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books
console.log("Library Name:", library.name);
library.books.forEach(b => console.log("Book Title:", b.title));


// Activity 4: The `this` Keyword

// Task 7: Add a method that uses `this` to return a string with the book's title and year

book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());


//Activity 5: Object Iteration

//Task 8: Use a `for...in` loop to iterate over the properties of the book object
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9: Use `Object.keys` and `Object.values` to log all keys and values
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

// Feature Request Scripts

// 1. Book Object Script

let bookScript = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};
console.log(bookScript);
console.log(bookScript.getDetails());
bookScript.updateYear(2021);
console.log(bookScript);
console.log(bookScript.getTitleAndYear());


// 2. Library Object Script

let libraryScript = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        bookScript
    ]
};
console.log(libraryScript);
console.log("Library Name:", libraryScript.name);
libraryScript.books.forEach(b => console.log("Book Title:", b.title));


// 3. Object Iteration Script

let bookIteration = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

for (let key in bookIteration) {
    if (bookIteration.hasOwnProperty(key)) {
        console.log(`${key}: ${bookIteration[key]}`);
    }
}

console.log("Keys:", Object.keys(bookIteration));
console.log("Values:", Object.values(bookIteration));
