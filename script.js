let input = document.querySelector("#texto-tarefa");

let btn = document.querySelector("#criar-tarefa");
btn.addEventListener("click", addTask);

function addTask() {
  let ol = document.querySelector("#lista-tarefas");
  let li = document.createElement("li");
  li.classList.add("tasks")
  li.innerHTML = input.value;
  ol.appendChild(li);
  tasks(); 
  clearInput();  
}

function clearInput() {
  input.value = '';
}

function tasks() {
  let tasks = document.querySelectorAll(".tasks");
  for (let index = 0; index < tasks.length; index+=1) {
    tasks[index].addEventListener("click", colorTask); 
    tasks[index].addEventListener("dblclick", textDecoration); 
  }  
}

function colorTask(event) {
  let selectColor = document.querySelector(".colorGray")
  if(selectColor) {
    selectColor.classList.remove("colorGray")
    event.target.classList.add("colorGray")
  } else {
    event.target.classList.add("colorGray")
  }
} 

function textDecoration(event) {  
  event.target.classList.toggle("completed")
} 

const clearAllButton = document.querySelector( '#apaga-tudo');
clearAllButton.addEventListener('click', clearAll);

function clearAll() {
  const taskslist = document.querySelector('#lista-tarefas');
  const tasksItems = document.querySelectorAll(".tasks");
  console.log(tasksItems.length)
  for (let index = 0; index < tasksItems.length; index += 1) {
    taskslist.removeChild(tasksItems[index])
  }
}