//?task1

// const btn = document.getElementById('btn');
// btn.onclick = () => {
//   let number1 = +document.getElementById("number1").value;
//   let operator = document.getElementById("operator").value;
//   let number2 = +document.getElementById("number2").value;
//   let result;
//   switch (operator) {
//     case "+":
//       result = number1 + number2;
//       break;
//     case "-":
//       result = number1 - number2;
//       break;
//     case "*":
//       result = number1 * number2;
//       break;
//     case "/":
//       result = number1 / number2;
//       break;
//     default:
//       result = "Səhv operator!";
//   }
//   document.getElementById("result").innerText = "Cavab: " + result;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

//?task2

// const redButton = document.getElementById("red-button");
// const greenButton = document.getElementById("green-button");
// const blueButton = document.getElementById("blue-button");
// const yellowButton = document.getElementById("yellow-button");
// redButton.onclick = () =>{
//   writeColor("red");
// };
// greenButton.onclick = () =>{
//   writeColor("green");
// };
// blueButton.onclick = () =>{
//   writeColor("blue");
// };
// yellowButton.onclick = () =>{
//   writeColor("yellow");
// };
// function writeColor(color) {
//   let colorOutput = document.getElementById("color-output");
//   colorOutput.innerHTML = "Seçilen renk: " + color;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

//?task3


// const boxes = document.querySelectorAll('.box');
// const colorInput = document.getElementById("colorInput");
// boxes.forEach(item => {
//     item.onclick = () => {
//         item.style.background = colorInput.value
//     }
// })