const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task first!");
        return;
    }

    const li = document.createElement('li');
    
    const tickBox = document.createElement('input');
    tickBox.type = 'checkbox';
    tickBox.classList.add('tick-box');
  
    tickBox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    const textSpan = document.createElement('span');
    textSpan.innerText = taskText;
    textSpan.classList.add('task-text');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(tickBox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    taskInput.value = "";
}

clearAllBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        taskList.innerHTML = "";
    }
});

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});