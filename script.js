let button = document.getElementById('criar-tarefa');
let linha = document.createElement('li');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
let clickList = document.querySelectorAll('ol');

button.addEventListener('click', function() {
    let linha = document.createElement('li');
    lista.appendChild(linha).innerText = input.value;
    input.value = ' ';
})


for (let i = 0; i < clickList.length; i += 1) {
  clickList[i].addEventListener('click', function() {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}

