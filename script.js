const buttonAdd = document.querySelector("#criar-tarefa");
const ThetoDoList = document.querySelector("#lista-tarefas");
const taskText = document.querySelector("#texto-tarefa");

function addTaskToDo() {
  buttonAdd.addEventListener("click", function () {
    mkTask(taskText.value, "");
    taskText.value = "";
  });
}

function mkTask(text, saved) {
  const taskToDo =  document.createElement("li");
  taskToDo.className = " taskToDo" + saved;
  taskToDo.innerText = text;
  selectableTasks(taskToDo);
  doubleClick(taskToDo);
  ThetoDoList.appendChild(taskToDo);
}

addTaskToDo();

function selectableTasks(taskSelec) {
  taskSelec.addEventListener("click", function () {
    let lastSelected = document.querySelector(".selected");
    if (lastSelected != null) {
      lastSelected.className = lastSelected.className.replace(" selected", "");
    }
    taskSelec.className += " selected";
  });
}

function doubleClick(taskDb) {
  taskDb.addEventListener("dblclick", function () {
    if (taskDb.className.match(/completed/)) {
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

function saveTasks() {  
  const buttonSave = document.querySelector("#salvar-tarefas");
  buttonSave.addEventListener("click", function () {

    let tasksToSave = [];
    dellSaveds();
    let allTasksNow = document.querySelectorAll(".taskToDo");
    for (let toSave = 0; toSave < allTasksNow.length; toSave++) {      
      let taskObj = {
        task: allTasksNow[toSave].innerText,
        class: allTasksNow[toSave].className
      };
      tasksToSave.push(taskObj);
    }
    localStorage.setItem("tasksToSave", JSON.stringify(tasksToSave));
    alert("Lista Salva com Sucesso");
  });
}

saveTasks();

function dellSaveds() {
  localStorage.removeItem("tasksToSave");
}

function loadTasks() {
  let toLoadTasks = JSON.parse(localStorage.getItem("tasksToSave"));
  if(toLoadTasks != undefined){
    for (let task = 0; task < toLoadTasks.length; task++) {
      mkTask(toLoadTasks[task].task, toLoadTasks[task].class.replace(" taskToDo", ""));
    }
    console.log("Carregado");
  } else {
    console.log("Vasio");
  }
}

loadTasks();
