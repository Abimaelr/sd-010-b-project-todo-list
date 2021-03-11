let button = document.getElementById('criar-tarefa');
let linha = document.createElement('li');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
let clickList = document.getElementsByClassName('li-style');

//criação do botão
button.addEventListener('click', function() {
    let linha = document.createElement('li');
    linha.classList.add('li-style');
    lista.appendChild(linha);
    linha.innerText = input.value;
    input.value = '';
})
//colorir a linha que clicar
function mudaCor(event) {
  event.target.classList.add('corDeFundo');
}

function linhaLista() {
  for (let i = 0; i < clickList.length; i += 1) {
    clickList[i].addEventListener('click', mudaCor);
  }
}
linhaLista