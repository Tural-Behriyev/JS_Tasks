//!task1- Todo list

// let btn = document.querySelector("button");
// btn.onclick = () => {
// let taskInput = document.getElementById("taskInput");
// let taskText = taskInput.value.trim();

// if (taskText !== "") {
//   let li = document.createElement("li");
//   li.textContent = taskText;

//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "❌";
//   deleteButton.onclick = function () {
//     li.remove();
//   };

//   li.appendChild(deleteButton);

//   document.getElementById("taskList").appendChild(li);

//   taskInput.value = "";
// }
//

/////////////////////////////////////////////////////////////////////

//!task2- Calcuator

// let num = document.getElementsByClassName("num");
// let opr = document.getElementsByClassName("opr");
// let dot = document.getElementById("dot");
// let clear = document.getElementById("clear");
// let result = document.getElementById("result");
// let calculate = document.getElementById("ans");
// let operator;
// let first;
// let second;

// for (let i = 0; i < num.length; i++) {
//   num[i].addEventListener("click", function () {
//     result.value += this.textContent;
//   });
// }

// for (let i = 0; i < opr.length; i++) {
//   opr[i].addEventListener("click", function () {
//     operator = this.textContent;
//     result.value += operator;
//   });
// }

// dot.addEventListener("click", function () {
//   result.value += this.textContent;
// });

// clear.addEventListener("click", function () {
//   result.value = "";
// });

// calculate.addEventListener("click", function () {
//   let ans = result.value;
//   let numb = ans.split(operator);
//   first = +numb[0];
//   second = +numb[1];
//   switch (operator) {
//     case "+":
//       ans = first + second;
//       break;
//     case "-":
//       ans = first - second;
//       break;
//     case "*":
//       ans = first * second;
//       break;
//     case "/":
//       if (second === 0) {
//         result.value = "Error";
//         return;
//       }
//       ans = first / second;
//       break;
//     default:
//       return;
//   }
//   result.value = ans;
// });

/////////////////////////////////////////////////////////////////////

//!task3- Faktorial

// let btn = document.querySelector("button");
// btn.onclick = () => {
//   let numberInput = document.getElementById("numberInput").value;
//   let resultDisplay = document.getElementById("result");
//   if (numberInput === "") {
//     resultDisplay.innerText = "bir sayı daxil edin!";
//     return;
//   }
//   let number = +numberInput;
//   let factorial = 1;
//   for (let i = 2; i <= number; i++) {
//     factorial *= i;
//   }
//   resultDisplay.innerText = number + "! = " + factorial;
// };