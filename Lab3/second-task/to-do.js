const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => li.remove();

    li.onclick = () => li.classList.toggle('done');

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

addButton.addEventListener('click', addTask);


taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
