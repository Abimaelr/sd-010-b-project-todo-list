const task = document.getElementById('texto-tarefa');
const saveButton = document.getElementById('criar-tarefa');
const orderedlist = document.getElementById('lista-tarefas'); 
const deleteAll = document.getElementById('apaga-tudo');
const deleteComplete = document.getElementById('remover-finalizados')
const listItem = document.getElementsByTagName('li');

saveButton.addEventListener('click', () => {
  addTask();
});

function addTask(taskTodo) {
  let taskText = task.value;
  if (taskTodo) {
    taskText = taskTodo.text;
  }
  if (taskText) {
    const taskEl = document.createElement('li');
    taskEl.classList.add('list');
    taskEl.innerText = taskText;
    orderedlist.appendChild(taskEl)

   

  }
  task.value = '';
}