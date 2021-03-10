let input = document.querySelector("#texto-tarefa");

let btn = document.querySelector("#criar-tarefa");
btn.addEventListener("click", addTask);

function addTask() {
  let ol = document.querySelector("#lista-tarefas");
  let li = document.createElement("li");
  li.classList.add("tasks")
  li.innerHTML = input.value;
  //console.log(li)
  ol.appendChild(li);
  tasks(); 
  clearInput();
  // colorTasks();
  
}

function clearInput() {
  input.value = '';
}

/* function colorTasks() {
  let tasks = document.querySelector(".tasks");
  tasks.addEventListener("click", function() {
    tasks.style.backgroundColor = "rgb(128,128,128)";
    console.log(tasks)
  })  
} */


function tasks(event) {
  let tasks = document.querySelectorAll(".tasks");
  for (index = 0; index < tasks.length; index+=1) {
    tasks[index].addEventListener("click", colorTask);  
  }  
}

function colorTask(event) {
  event.target.style.backgroundColor = "rgb(128,128,128)"
}








