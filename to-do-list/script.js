const task = [];

const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById('taskInput');
const submit = document.getElementById("submit");

const addTask = (taskText) => {
    const liElement = document.createElement("li");
    const liButton = document.createElement("button");
    const textSpan = document.createElement("span");

    textSpan.textContent = taskText;

    liElement.appendChild(liButton);
    liElement.appendChild(textSpan);
    taskList.appendChild(liElement);

    task.push({
        text: taskText,
        id: Date.now(),
        completed: false,
    })
    console.log(task)

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

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText); 
    }
    taskInput.value = "";
});