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

function selectableTasks(taskSelec) {
  taskSelec.addEventListener("click", function () {
    let lastSelected = document.querySelector(".selected");
    if(lastSelected != null){
      lastSelected.style.backgroundColor = "#dfd9d7";
      lastSelected.className = lastSelected.className.replace(" selected", "");
    }
    taskSelec.style.backgroundColor = "rgb(128, 128, 128)";
    taskSelec.className += " selected";
  });      
}

function doubleClick(taskDb) {
  taskDb.addEventListener("dblclick", function () {
    if(taskDb.className.match(/completed/)) {
      taskDb.className = taskDb.className.replace(" completed", "");
    } else {
      taskDb.className += " completed";
    }    
  });
}

function dellTasks() {
  let buttonDellAll = document.querySelector("#apaga-tudo");
  buttonDellAll.addEventListener("click", function () {
    ThetoDoList.innerHTML = "";
  });
}

dellTasks();

function dellDone() {
  let buttonDellDone = document.querySelector("#remover-finalizados");
  buttonDellDone.addEventListener("click", function () {
    let tasksDone = document.querySelectorAll(".completed");
    const totalDone = tasksDone.length;
    for (let task = 0; task < totalDone; task++) {
      ThetoDoList.removeChild(tasksDone[task]);    
    }
  });

}

dellDone();