document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-due-date').value;
        const newTask = { title, description, dueDate };

        tasks.push(newTask);
        displayTasks();
        taskForm.reset();
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <div>
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <small>${task.dueDate}</small>
                </div>
                <div>
                    <button onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    }

    window.editTask = function(index) {
        const task = tasks[index];
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-description').value = task.description;
        document.getElementById('task-due-date').value = task.dueDate;

        taskForm.onsubmit = (e) => {
            e.preventDefault();
            task.title = document.getElementById('task-title').value;
            task.description = document.getElementById('task-description').value;
            task.dueDate = document.getElementById('task-due-date').value;
            displayTasks();
            taskForm.reset();
            taskForm.onsubmit = addTask;
        };
    };

    window.deleteTask = function(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            displayTasks();
        }
    };

    function addTask(e) {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-due-date').value;
        const newTask = { title, description, dueDate };

        tasks.push(newTask);
        displayTasks();
        taskForm.reset();
    }
});
