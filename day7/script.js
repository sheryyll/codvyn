const paragraph = document.querySelector("p");
const button = document.querySelector("button");
const box = document.querySelector("div");

paragraph.textContent = "This paragraph text was changed using JavaScript.";

box.style.backgroundColor = "lightblue";
box.style.padding = "10px";
box.style.marginTop = "10px";
box.style.width = "250px";

button.addEventListener("click", function () {
    const newPara = document.createElement("p");
    newPara.textContent = "New paragraph added on button click.";
    box.appendChild(newPara);
});

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskPara = document.createElement("p");
  taskPara.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => taskDiv.remove());

  taskDiv.append(taskPara, deleteBtn);
  taskList.appendChild(taskDiv);

  taskInput.value = "";
});
