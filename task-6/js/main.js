// Tapşırıq 1 //

// let randomNumber = Math.floor(Math.random() * 50);
// let correctGuess = false;
// let stepCount = 0;

// while (!correctGuess) {
//   let userGuess = +prompt("Guess the number(between 0 and 50):");
//   if (userGuess === randomNumber) {
//     correctGuess = true;
//   } else if (userGuess === "") {
//     console.log("Enter a number");
//   } else {
//     alert("Wrong guess. Try again.");
//   }
//   stepCount++;
// }

// let prize = 0;

// if (stepCount === 1) {
//   prize = 1000;
// } else if (stepCount >= 2 && stepCount <= 5) {
//   prize = 750;
// } else if (stepCount >= 6 && stepCount <= 9) {
//   prize = 250;
// } else {
//   prize = -250;
// }
// console.log("Amount of money you earned: " + prize + " manat.");




// ------------------------------------------------ ------------------------------------------------- -----------------





// TASK2

// let total = 0;

// for (let i = 0; i < 5; i++) {
//   let numbers = +prompt("Enter a numbers:");
//   total += numbers;
// }
// console.log("Sum of entered numbers:", total);




// ------------------------------------------------ ------------------------------------------------- -----------------




// TASK3

// let size = 4;

// for (let i = size; i > 0; i--) {
//   let line = "";
//   for (let j = 0; j < i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }




// ------------------------------------------------ ------------------------------------------------- -----------------




// TASK4

// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial  *= i;
// }
// console.log("factorial :", factorial );





// ------------------------------------------------ ------------------------------------------------- -----------------




// Tapşırıq-02

// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log("Mən sikllərdən necə istifadə edəcəyimi bilirəm");
// }





// ------------------------------------------------ ------------------------------------------------- -----------------




// Task-03

// for (let i = 100; i <= 999; i++) {
//     if (i % 10 === 0) {
//       console.log(i);
//     }
// }





// ------------------------------------------------ ------------------------------------------------- -----------------





// Task-04

// let cem = 0;
// for (let i = 10; i < 100; i++) {
//   cem += i;
// }
// console.log(cem);






// ------------------------------------------------ ------------------------------------------------- -----------------





// Tapşırıq-05

// const number = prompt("add a number:");
// if (isNaN(number)) {
//     console.log("The value you included is not correct..");
// } else {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     console.log(`${number} the sum of all three terms into which the term is divided is: ${sum}`);
// }




// ------------------------------------------------ ------------------------------------------------- -----------------




// Tapşırıq-07

// let hasil = 1;
// let eded = 1;
// for (let i = 1; i <= 10; i++) {
//   hasil *= eded;
//   eded++;
// }
// console.log(hasil);



// ------------------------------------------------ ------------------------------------------------- -----------------



// Tapşırıq-09

// let metn = "Bu bir mətndir.";
// let ilkIndeks = -1;

// for (let i = 0; i < metn.length; i++) {
//   if (metn[i] === ".") {
//     ilkIndeks = i;
//     break;
//   }
// }
// console.log("İlk indeks: " + ilkIndeks);

