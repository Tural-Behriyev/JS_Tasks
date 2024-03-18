//!task-1

// function updateClock() {
//   const now = new Date();
//   const hours = (now.getHours() < 10 ? "0" : "") + now.getHours();
//   const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
//   const seconds = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
//   const time = `${hours}:${minutes}:${seconds}`;
//   document.getElementById("clock").textContent = time;
// }
// setInterval(updateClock, 1000);
// updateClock();

/////////////////////////////////////////////////////////////////////////////////////

//!task2

// const colors = ["red", "green", "blue", "yellow"];
// const buttons = document.querySelectorAll(".btn");
// const randomIndex = Math.ceil(Math.random() * colors.length - 1);
// const bombanıİmhaedənRəng = colors[randomIndex];
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (e.target.dataset.color === bombanıİmhaedənRəng) {
//       clearTimeout(bombaPatladı);
//       document.write("bomba zererleşdirildi");
//     }
//   });
// });
// const bombaPatladı = setTimeout(() => {
//   document.write("BOOOMB");
// }, 5000);

/////////////////////////////////////////////////////////////////////////////////////

//!task3

// let btn = document.querySelector("button");
// btn.onclick = () => {
//   let taskInput = document.getElementById("taskInput");
//   let taskText = taskInput.value.trim();

//   if (taskText !== "") {
//     let li = document.createElement("li");
//     li.textContent = taskText;

//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "❌";
//     deleteButton.onclick = function () {
//       li.remove();
//     };
//     li.appendChild(deleteButton);
//     document.getElementById("taskList").appendChild(li);
//     taskInput.value = "";
//     taskInput.focus();
//     localStorage.setItem("task", taskText);
//   }
// };

/////////////////////////////////////////////////////////////////////////////////////

//!task4

// let btn = document.querySelector("button");
// let darkMode = false;
// btn.onclick = () => {
//   darkMode = !darkMode;
//   let body = document.body;
//   if (darkMode) {
//     body.classList.add("dark-mode");
//     body.classList.remove("light-mode");
//     btn.textContent = "Light Mode";
//     localStorage.setItem("mode", "dark");
//   } else {
//     body.classList.add("light-mode");
//     body.classList.remove("dark-mode");
//     btn.textContent = "Dark Mode";
//     localStorage.setItem("mode", "light");
//   }
// };

// let savedMode = localStorage.getItem("mode");
// if (savedMode === "dark") {
//   document.body.classList.add("dark-mode");
//   btn.textContent = "Light Mode";
// } else {
//   document.body.classList.add("light-mode");
//   btn.textContent = "Dark Mode";
// }
