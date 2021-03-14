
const lista = document.getElementById('lista-tarefas');
const tarefas = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa')
const PAINT = 'paintSelected';

addButton.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.classList.add('itemTask');
  newItem.innerText = tarefas.value;
  if (newItem.innerText) {
    lista.appendChild(newItem);
    tarefas.value = '';
  } else {
    alert('Digite uma tarefa');
  }  
  newItem.addEventListener('click', function(event) {
    let itemSelected = event.target;
    let tasks = document.getElementsByTagName('li');
    for (index = 0; index < tasks.length; index += 1) {
      tasks[index].classList.remove(PAINT);
    }
    itemSelected.classList.add(PAINT);    
  })
});
