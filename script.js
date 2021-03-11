let button = document.getElementById('criar-tarefa');
let linha = document.createElement('li');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');

button.addEventListener('click', function() {
    let linha = document.createElement('li');
    lista.appendChild(linha).innerText = input.value;
    input.value = ' ';
})
