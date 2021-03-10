const buttonAdd = document.querySelector("#criar-tarefa");
const ThetoDoList = document.querySelector("#lista-tarefas");
const taskText = document.querySelector("#texto-tarefa");

function addTaskToDo() {
  buttonAdd.addEventListener("click", function () {
    const taskToDo =  document.createElement("li");
    taskToDo.className = "taskToDo";
    taskToDo.innerText = taskText.value;
    selectableTasks(taskToDo);
    ThetoDoList.appendChild(taskToDo);
    taskText.value = "";
  });
}

addTaskToDo();

function selectableTasks(toSelect) {
  toSelect.addEventListener("click", function () {
    let lastSelected = document.querySelector(".selected");
    if(lastSelected != null){
      lastSelected.style.backgroundColor = "#dfd9d7";
      lastSelected.className = lastSelected.className.replace(" selected", "");
    }
    toSelect.style.backgroundColor = "rgb(128, 128, 128)";
    toSelect.className += " selected";
  });      
}

