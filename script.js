const creatTask = document.querySelector('#criar-tarefa');

creatTask.addEventListener('click', addTask);

function addTask(event, task, className) {
    const addTaskList = document.getElementById("lista-tarefas");
    const listTask = document.createElement("li")
if (!task) {
    const task = document.getElementById("texto-tarefa")
    task = task.nodeValue;
    task.value = "";
}
if (className) {
    listTask.className = className;
}
listTask.innerText = task
listTask.addEventListener("click", changeSelectedTask);
listTask.addEventListener("dblclick", changeCompletedTask);
addTaskList.appendChild(ListTask);
}
