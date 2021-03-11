const listTask = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');

function createTask(event) {
  const task = document.createElement('li');
  task.className = 'color';
  task.addEventListener('click', paintLi);
  listTask.appendChild(task);
  task.textContent = event.target.value;
  document.getElementById('texto-tarefa').value = '';
}

inputField.addEventListener('change', createTask);

function paintLi(event) {
 const itens = document.querySelectorAll('.color');
 for (let index = 0; index < itens.length; index += 1) {
   if (itens[index].classList.contains('gray')) {
    itens[index].classList.remove('gray');
   }
   event.target.classList.add('gray');
 }
}
