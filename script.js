// criando elementos (Li)
let toAdd = () => {
    let addLi = document.createElement('li');
    addLi.innerText = inputText.value;
    document.getElementById('lista-tarefas').appendChild(addLi);
    inputText.value = '';
}

let createTask = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');

createTask.addEventListener('click', toAdd);

let bgColor = () => {
    
}

// Inserindoo tarefa em lista de tarefas
function insertTask() {
    let input = document.getElementById('texto-tarefa');
    let lista = document.getElementById('lista-tarefas');  
    if (input.value !== '') { 
      let task = createTask(input.value); 
      lista.appendChild(task); 
      input.value = '';
    }
  }