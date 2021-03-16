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