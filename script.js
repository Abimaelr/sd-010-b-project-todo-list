/*
pegar o valor do texto inserido
criar uma li com esse valor, fazer a li ser filha de ol
acredito que através de lista fica mais fácil, mas vamos ver
*/

function createLiText () {
  let getText = document.getElementById('texto-tarefa').value;
  let element = document.createElement('li');
  if (getText !== '') { 
    element;
    document.getElementById('lista-tarefas').appendChild(element).innerText = getText;
    document.getElementById('texto-tarefa').value = '';
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createLiText);
