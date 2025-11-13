const task = [];

const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById('taskInput');
const submit = document.getElementById("submit");

function saveTask() {
    const taskJSON = JSON.stringify(task);

    localStorage.setItem("TODO", taskJSON);
    }

function loadTasks() {
    const loadedTask = localStorage.getItem("TODO")
    JSON.parse(loadedTask);
    task.push(loadedTask);
    console.log(task);
    addTask(task[0]);
    addTask(task[1]);
    addTask(task[2]);
    addTask(task[3]);
}

const addTask = (taskText) => {
    const liElement = document.createElement("li");
    const liButton = document.createElement("button");
    const textSpan = document.createElement("span");

    liElement.appendChild(liButton);
    liElement.appendChild(textSpan);
    taskList.appendChild(liElement);

    const newTask = {
        text: taskText,
        completed: false,
        id: Date.now() 
    };

    task.push(newTask);

    liButton.addEventListener("mouseover", (event) => {
        liButton.classList.add("hover");
        liButton.textContent = "✓";
    });

    liButton.addEventListener("mouseout", (event) => {
        liButton.classList.remove("hover");
        liButton.textContent = "";
    });

    liButton.addEventListener("click", (event) => {
    liButton.parentElement.remove();


    });
}

submit.addEventListener("submit", (event) => {
    event.preventDefault();
    
    saveTask();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText); 
    }

    taskInput.value = "";
});

loadTasks();