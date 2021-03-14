
const lista = document.getElementById('lista-tarefas');
const tarefas = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa')

addButton.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.innerText = tarefas.value;
  lista.appendChild(newItem);
  tarefas.value = '';
})

// function addItem() {
  
//   const newItem = document.createElement('li');
//   newItem.innerText = tarefas.value;
//   lista.appendChild(newItem); 

//   const checkButton = document.createElement('button');
//   checkButton.innerHTML = `<i class="fas fa-check"></i>`
//   newItem.appendChild(checkButton);

//   const deleteButton = document.createElement('button');
//   deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
//   newItem.appendChild(deleteButton);
// }

// addItem();

