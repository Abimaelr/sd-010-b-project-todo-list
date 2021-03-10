let inputTask = document.getElementById('texto-tarefa');
let orderedList = document.getElementById('lista-tarefas');
let buttonCreateTask = document.getElementById('criar-tarefa');

buttonCreateTask.addEventListener('click', function () {
    let task = document.createElement('li')
    task.innerHTML = inputTask.value;
    inputTask.value = '';
    orderedList.appendChild(task);
})
