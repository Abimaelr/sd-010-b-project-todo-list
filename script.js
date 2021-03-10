const buttonAdd = document.querySelector("#criar-tarefa");
const ThetoDoList = document.querySelector("#lista-tarefas");
const taskText = document.querySelector("#texto-tarefa");

function addTaskToDo() {
  buttonAdd.addEventListener("click", function () {
    const taskToDo =  document.createElement("li");
    taskToDo.className = "taskToDo";
    taskToDo.innerText = taskText.value;
    selectableTasks(taskToDo);
    doubleClick(taskToDo);
    ThetoDoList.appendChild(taskToDo);
    taskText.value = "";
  });
}

addTaskToDo();

function selectableTasks(task) {
  task.addEventListener("click", function () {
    let lastSelected = document.querySelector(".selected");
    if(lastSelected != null){
      lastSelected.style.backgroundColor = "#dfd9d7";
      lastSelected.className = lastSelected.className.replace(" selected", "");
    }
    task.style.backgroundColor = "rgb(128, 128, 128)";
    task.className += " selected";
  });      
}

function doubleClick(task) {
  task.addEventListener("dblclick", function () {
    if(task.className.match(/completed/)) {
      console.log("task riscada");
      task.className = task.className.replace(" completed", "");
    } else {
      task.className += " completed";
    }
    // console.log("duploClique");
    
  });
}
