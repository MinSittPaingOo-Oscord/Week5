
const categoryInput = document.getElementById('category');
const taskInput = document.getElementById('task');
const tasksList = document.getElementById('tasks-list');

const tasksByCategory = {};

function addTask() {
    const category = categoryInput.value.trim();
    const task = taskInput.value.trim();

    if (!category || !task) {
        alert("Please enter both category and task.");
        return;
    }

    if (!tasksByCategory[category]) {
        tasksByCategory[category] = [];
    }
    tasksByCategory[category].push(task);

    categoryInput.value = '';
    taskInput.value = '';
    listTasks();
}


function listTasks() {

    tasksList.innerHTML = '';

    for (const category in tasksByCategory) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);


        tasksByCategory[category].forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            
     
            const taskText = document.createElement('span');
            taskText.textContent = task;
            taskDiv.appendChild(taskText);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeTask(category, index);
            taskDiv.appendChild(removeButton);

            categoryDiv.appendChild(taskDiv);
        });

        tasksList.appendChild(categoryDiv);
    }
}


function removeTask(category, taskIndex) {
    tasksByCategory[category].splice(taskIndex, 1);

    if (tasksByCategory[category].length === 0) {
        delete tasksByCategory[category];
    }

    listTasks();
}
