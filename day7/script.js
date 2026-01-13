// element selection
const taskInput = document.querySelector("#taskInput"); // selects input task
const addTaskBtn = document.querySelector("#addTaskBtn"); // selects the button with id addTaaskBt
const taskList = document.querySelector("#taskList"); // selects the target container for task lists

// function to create tasks
function createTask(text) {
    const taskDiv = document.createElement("div"); // create a div 
    taskDiv.className = "task";  // adds a classame task to div 

    const taskText = document.createElement("p"); // creates a child element paragraph
    taskText.textContent = text; // adds the text content 

    const deleteBtn = document.createElement("button"); // creates a button to delete the task
    deleteBtn.textContent = "Delete"; 

    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
    }); // logic to remove the task from list

    taskDiv.append(taskText, deleteBtn); // appending the task to the target container
    return taskDiv;
}

// event handling using addEventListener
addTaskBtn.addEventListener("click", () => {
    const value = taskInput.value.trim();
    if (!value) return;

    taskList.appendChild(createTask(value));
    taskInput.value = "";
});
