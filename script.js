let input = document.querySelector("#texto-tarefa");

let btn = document.querySelector("#criar-tarefa");
btn.addEventListener("click", addTask);

function addTask() {
  let ol = document.querySelector("#lista-tarefas");
  let li = document.createElement("li");
  li.innerHTML = input.value;
  ol.appendChild(li);  
  clearInput()
}

function clearInput() {
  input.value = '';
}










