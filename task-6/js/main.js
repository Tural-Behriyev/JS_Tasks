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

// others;

// 1

// function yonTap(istiqamet) {
//   let istiqametler = {
//     up: "Yuxarı get",
//     right: "Sağa get",
//     down: "Aşağı get",
//     left: "Sola get",
//   };
//   for (let yon in istiqametler) {
//     if (istiqamet === yon) {
//       console.log(istiqametler[yon]);
//       return;
//     }
//   }
//   console.log("Yanlış istiqamət daxil edildi.");
// }
// let istiqamet = prompt("İstiqaməti daxil edin (up/right/down/left): ");
// yonTap(istiqamet);

// ------------------------------------------------ ------------------------------------------------- -----------------

// 2

// function calculateBMI(weight, height) {
//   return weight / (height * height);
// }
// function interpretBMI(bmi) {
//   if (bmi < 18.5) {
//     return "BMI-si azdir, ariqdir.";
//   } else if (bmi < 25) {
//     return " BMI-si normal beden olcusune sahibdir";
//   } else if (bmi < 30) {
//     return "BMI-si kokdur";
//   } else {
//     return "obesdir";
//   }
// }
// const numPeople = +prompt("Neçə insanın BMI hesablamaq istəyirsiniz?");
// for (let i = 1; i <= numPeople; i++) {
//   const weight = +prompt(`${i} Kilo (kq) ilə çəki daxil edin:`);
//   const height = +prompt(`${i} Hündürlüyü metrlə (m) daxil edin:`);
//   const bmi = calculateBMI(weight, height);
//   const interpretation = interpretBMI(bmi);
//   console.log(`${i} - BMI: ${bmi.toFixed(2)}: ${interpretation}`);
// }

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

// Task-09

// let metn = "Bu bir mətndir.";
// let ilkIndeks = -1;

// for (let i = 0; i < metn.length; i++) {
//   if (metn[i] === ".") {
//     ilkIndeks = i;
//     break;
//   }
// }
// console.log("İlk indeks: " + ilkIndeks);

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
