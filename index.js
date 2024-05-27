const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim(); // Pega o valor digitado dentro do input.
    if (taskText !== '') {
        const maxText = taskText.substring(0, 35);
        const item = document.createElement('li');
        item.innerHTML = `<span>${maxText}</span>
        <button class="editar" onclick="editTask(this)">Editar</button>
        <button class="deletar" onclick="deleteTask(this)">Deletar</button>`;
        taskList.appendChild(item);
        taskInput.value = "";
    }
}

function editTask(button) {
    const item = button.parentElement;
    const span = item.querySelector('span');
    const newText = prompt("Editar Tarefa", span.textContent);
    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
    }
}

function deleteTask(button) {
    const item = button.parentElement;
    taskList.removeChild(item);
}