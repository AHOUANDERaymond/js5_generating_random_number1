// 1. Sélectionner un élément par son ID (getElementById)
const title = document.getElementById("title");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const highlightTasksBtn = document.getElementById("highlightTasksBtn");
const hideTasksBtn = document.getElementById("hideTasksBtn");

// 2. Sélectionner un élément avec querySelector
changeTitleBtn.addEventListener("click", function () {
    const h1 = document.querySelector("#title");
    h1.textContent = "Ma nouvelle liste de tâches";
    h1.style.color = "blue";
});

// 3. Sélectionner plusieurs éléments avec getElementsByClassName
highlightTasksBtn.addEventListener("click", function () {
    const tasks = document.getElementsByClassName("task");
    for (let task of tasks) {
        task.classList.toggle("highlight");
    }
});

// 4. Sélectionner plusieurs éléments avec getElementsByTagName
hideTasksBtn.addEventListener("click", function () {
    const listItems = document.getElementsByTagName("li");
    for (let item of listItems) {
        item.style.display = item.style.display === "none" ? "block" : "none";
    }
});

// 5. Sélectionner plusieurs éléments avec querySelectorAll
addTaskBtn.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.className = "task";
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
});
