function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
        <input type="checkbox" onclick="toggleComplete(this)">
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';  // Clear input field after adding task
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function toggleComplete(checkbox) {
    const taskItem = checkbox.parentElement;

    if (checkbox.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }
}