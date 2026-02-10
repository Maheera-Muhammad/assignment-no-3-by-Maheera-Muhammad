/*
JavaScript Assignment Solutions
*/

// =============================================
// PART A: LOOPS (Fundamentals)
// =============================================

// Question 1: Print numbers 1 to 10
function printNumbers() {
    console.log("Question 1: Numbers from 1 to 10");
    console.log("Using for loop:");
    
    // Using for loop to print numbers 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log("------------------------");
}

// Question 2: Multiplication Table
function multiplicationTable() {
    console.log("Question 2: Multiplication Table");
    
    // Take input from user
    let number = parseInt(prompt("Enter a number for multiplication table:"));
    
    // Validate input
    if (isNaN(number)) {
        console.log("Invalid input! Please enter a valid number.");
        return;
    }
    
    console.log(`Multiplication table of ${number}:`);
    
    // Using for loop to generate table from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
    console.log("------------------------");
}

// Question 3: Check Prime Number
function checkPrime() {
    console.log("Question 3: Prime Number Check");
    
    // Take input from user
    let number = parseInt(prompt("Enter a number to check if it's prime:"));
    
    // Validate input
    if (isNaN(number)) {
        console.log("Invalid input! Please enter a valid number.");
        return;
    }
    
    let isPrime = true;
    
    // Numbers less than 2 are not prime
    if (number < 2) {
        isPrime = false;
    } 
    else {
        // Check for divisors from 2 to square root of number
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break; // Exit loop if divisor found
            }
        }
    }
    
    // Display result
    if (isPrime) {
        console.log(`${number} is a PRIME number`);
    } else {
        console.log(`${number} is NOT a prime number`);
    }
    console.log("------------------------");
}

// =============================================
// PART B: FUNCTIONS (Basics)
// =============================================

// Question 5: Square Function
function squareNumber(num) {
    // Accepts a number and returns its square
    return num * num;
}

function demonstrateSquare() {
    console.log("Question 5: Square Function");
    
    // Take input from user
    let input = parseFloat(prompt("Enter a number to find its square:"));
    
    if (isNaN(input)) {
        console.log("Invalid input!");
        return;
    }
    
    // Call the function and display result
    let result = squareNumber(input);
    console.log(`Square of ${input} is: ${result}`);
    console.log("------------------------");
}

// Question 6: Arithmetic Operations Function
function arithmeticOperations(num1, num2) {
    // Takes two numbers and returns their operations
    const sum = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    
    return { sum, subtraction, multiplication };
}

function demonstrateArithmetic() {
    console.log("Question 6: Arithmetic Operations");
    
    // Take inputs from user
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid inputs! Please enter valid numbers.");
        return;
    }
    
    // Call the function
    const results = arithmeticOperations(num1, num2);
    
    // Display results
    console.log(`Numbers: ${num1} and ${num2}`);
    console.log(`Sum: ${num1} + ${num2} = ${results.sum}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${results.subtraction}`);
    console.log(`Multiplication: ${num1} × ${num2} = ${results.multiplication}`);
    console.log("------------------------");
}

// =============================================
// PART C: LOOPS AND FUNCTIONS (Combined)
// =============================================

// Question 7: Total and Average Calculator
function calculateTotalAverage() {
    console.log("Question 7: Total and Average Calculator");
    
    let numbers = [];
    let total = 0;
    
    console.log("Enter 5 numbers:");
    
    // Using for loop to take 5 inputs
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt(`Enter number ${i}:`));
        
        // Validate input
        if (isNaN(num)) {
            console.log("Invalid input! Please enter a valid number.");
            return;
        }
        
        numbers.push(num);
        total += num; // Add to total
    }
    
    // Calculate average
    let average = total / numbers.length;
    
    // Display results
    console.log(`Numbers entered: ${numbers.join(', ')}`);
    console.log(`Total: ${total}`);
    console.log(`Average: ${average}`);
    console.log("------------------------");
}

// Question 8: Student Grading System
function studentGradingSystem() {
    console.log("Question 8: Student Grading System");
    
    // Take input from user
    let marks = parseFloat(prompt("Enter student marks (0-100):"));
    
    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input! Please enter marks between 0 and 100.");
        return;
    }
    
    let grade;
    
    // Using if-else to determine grade
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }
    
    // Display result
    console.log(`Student Marks: ${marks}`);
    console.log(`Grade: ${grade}`);
    console.log("------------------------");
}

// =============================================
// MAIN PROGRAM - Run All Questions
// =============================================

function runAllQuestions() {
    console.log("=================================");
    console.log("   JAVASCRIPT ASSIGNMENT SOLUTIONS");
    console.log("=================================\n");
    
    // Run all questions one by one
    printNumbers();
    multiplicationTable();
    checkPrime();
    demonstrateSquare();
    demonstrateArithmetic();
    calculateTotalAverage();
    studentGradingSystem();
    
    console.log("=================================");
    console.log("       ASSIGNMENT COMPLETED");
    console.log("=================================");
}

// Start the program
runAllQuestions();