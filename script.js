const buttonAdd = document.querySelector("#criar-tarefa");
const ThetoDoList = document.querySelector("#lista-tarefas");
const taskText = document.querySelector("#texto-tarefa")

function addTaskToDo() {
  buttonAdd.addEventListener("click", function () {
    const taskToDo =  document.createElement("li");
    taskToDo.innerText = taskText.value;
    ThetoDoList.appendChild(taskToDo);
    taskText.value = "";
  });
}

addTaskToDo();