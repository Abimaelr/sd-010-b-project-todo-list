function createTask() {
    const button = document.getElementById('criar-tarefa');
    const ol = document.getElementById('lista-tarefas');
    const input = document.getElementById('texto-tarefa');
    button.addEventListener('click', function () {
        const li = document.createElement('li');
        li.innerText = input.value;
        ol.appendChild(li);
    })
}
createTask();