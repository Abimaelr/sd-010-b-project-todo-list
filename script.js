function addTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  button.addEventListener('click',function createTask() {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    lista.appendChild(newTask);
    input.value = "";
  });
}

addTask();

function changeItem () {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('click',function backTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}

changeItem();