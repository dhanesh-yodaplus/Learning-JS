//1. even or odd

// let userInput = prompt("Enter a number to check");

// if (userInput % 2 == 0) {
//     console.log("Even")
// }
// else {
//     console.log("Odd")
// }



// 2. Calculator

// let userInput = prompt("Enter a calculation using: +, -, *, /, or %.");
// let num1 = parseFloat(prompt("Enter 1st number"))
// let num2 = parseFloat(prompt("Enter 2st number"))

// let result;

// switch (userInput) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         result = num2 != 0 ? num1 / num2 : console.log("Cannot divide by zero");
//         break;

//     case "%":
//         result = num1 % num2;
//         break;

//     default:
//         result = null;
//         console.log("Enter the correct operator")
// }
// if (result != null && typeof (result) !== "string") {
//     console.log(`result of ${num1} ${userInput} ${num2} is ${result}`);
// }


// 3. 18 or not
// let age = prompt("Enter your age");

// let voteOrNot = age >= 18 ? "Can Vote" : "Cannot Vote";

// console.log(voteOrNot)



// 4. Grading system

// let marks = parseInt(prompt("Enter your marks"));

// if (marks >= 90){
//     console.log("A")
// }
// else if (marks >= 80){
//     console.log("B")
// }
// else if (marks >= 70){
//     console.log("C")
// }
// else{
//     console.log("Fail")
// }


// Use for-in to loop through an object and print all keys and values

// let person = {
//     name: "Dhanesh",
//     age: 24,
//     city: "Pune"
// };

// for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
// }


// Use for-of to loop through an array of numbers and
// print the square of each number


// let numbers = [2, 4, 6, 8];

// for (let num of numbers) {
//     console.log(`Square of ${num} is ${num * num}`);
// }

// Reverse a string
// let str = "hello";
// let reversed = str.split("").reverse().join("");
// console.log("Reversed string:", reversed);


// vowels

// let str = "javascript is fun";
// let count = 0;
// let vowels = "aeiouAEIOU";

// for (let char of str) {
//     if (vowels.includes(char)) {
//         count++;
//     }
// }

// console.log("Number of vowels:", count);


// Array Operations

// let numbers = [5, 2, 9, 1];

// // Add a number at end
// numbers.push(7);

// // Add a number at start
// numbers.unshift(3);

// // Remove first element
// numbers.shift();

// // Remove last element
// numbers.pop();

// // ascending order
// numbers.sort((a, b) => a - b);
// console.log(numbers);


