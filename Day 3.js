
// Activity 1: If-Else Statements

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.


function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}

// Example usage
checkNumber(10);  // Output: 10 is positive
checkNumber(-5);  // Output: -5 is negative
checkNumber(0);   // Output: 0 is zero


//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.


function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log('Eligible to vote');
    } else {
        console.log('Not eligible to vote');
    }
}

// Example usage
checkVotingEligibility(20);  // Output: Eligible to vote
checkVotingEligibility(16);  // Output: Not eligible to vote


// Activity 2: Nested If-Else Statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.


function findLargest(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log(`${a} is the largest`);
        } else {
            console.log(`${c} is the largest`);
        }
    } else {
        if (b >= c) {
            console.log(`${b} is the largest`);
        } else {
            console.log(`${c} is the largest`);
        }
    }
}

// Example usage
findLargest(10, 20, 30);  // Output: 30 is the largest
findLargest(50, 20, 30);  // Output: 50 is the largest
findLargest(10, 60, 30);  // Output: 60 is the largest


// Activity 3: Switch Case

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            console.log('Invalid day number');
    }
}

// Example usage
getDayName(1);  // Output: Sunday
getDayName(5);  // Output: Thursday
getDayName(8);  // Output: Invalid day number


//Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console


function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log(`The grade is ${grade}`);
}

// Example usage
getGrade(95);  // Output: The grade is A
getGrade(82);  // Output: The grade is B
getGrade(45);  // Output: The grade is F


// Activity 4: Conditional (Ternary) Operator

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.


function checkEvenOdd(num) {
    let result = (num % 2 === 0) ? 'even' : 'odd';
    console.log(`${num} is ${result}`);
}

// Example usage
checkEvenOdd(4);  // Output: 4 is even
checkEvenOdd(7);  // Output: 7 is odd


// Activity 5: Combining Conditions

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

// Example usage
isLeapYear(2000);  // Output: 2000 is a leap year
isLeapYear(1900);  // Output: 1900 is not a leap year
isLeapYear(2024);  // Output: 2024 is a leap year