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
  for (index = 0; index < tasks.length; index+=1) {
    tasks[index].addEventListener("click", colorTask);  
  }  
}

/* function colorTask(event) {
  let selectColor = document.querySelector(".selected")
  console.log(selectColor)
  if (selectColor === null) {
    event.target.classList.add("selected")  
  } else {
    selectColor.classList.remove("selected")
    selectColor.style.backgroundColor = '';
    event.target.classList.add("selected")
  }
  let selectColor2 = document.querySelector(".selected")
  selectColor2.style.backgroundColor = "rgb(128,128,128)" 
} */

function colorTask(event) {
  let selectColor = document.querySelector(".colorGray")
  console.log(selectColor)
  if(selectColor) {
    selectColor.classList.remove("colorGray")
    event.target.classList.add("colorGray")
    console.log(selectColor)
  } else {
    event.target.classList.add("colorGray")
  }
} 




