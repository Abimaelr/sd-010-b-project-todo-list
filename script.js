function newItem() {
    let item = document.createElement('li');
    let taskList = document.getElementById('lista-tarefas');
    taskList.appendChild(item);
    let text = document.getElementById('texto-tarefa').value;
    item.innerHTML = text;
}


window.onload = function() {
    document.getElementById('criar-tarefa').addEventListener('click', newItem);
}