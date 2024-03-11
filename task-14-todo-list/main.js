let btn = document.querySelector("button");
btn.onclick = () => {
let taskInput = document.getElementById("taskInput");
let taskText = taskInput.value.trim();

if (taskText !== "") {
  let li = document.createElement("li");
  li.textContent = taskText;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
}
