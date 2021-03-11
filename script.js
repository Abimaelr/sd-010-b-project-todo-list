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
    taskEl.addEventListener('click', () => {     
      for (let i = 0; i < listItem.length; i += 1) {        
        listItem[i].classList.remove('selected');
      }
       taskEl.classList.add('selected');
    });
    taskEl.addEventListener('dblclick', () => {      
      taskEl.classList.toggle('completed')
    });
  }
  task.value = '';
}