// criando elementos (Li)
let toAdd = () => {
    let addLi = document.createElement('li');
    addLi.innerText = inputText.value;
    document.getElementById('lista-tarefas').appendChild(addLi);
    inputText.value = '';
}
// Inserindoo tarefa em lista de tarefas
let createTask = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');

createTask.addEventListener('click', toAdd);


let selectTaskWithBackgroundColor = (color) => {
    let taskElementsList = document.querySelectorAll('.task');
    let selectTask = null;
    taskElementsList.forEach((task) => {
        if (task.style.backgroundColor === color) {
          selectTask = task;
    }
});
return selectTask; 
}
