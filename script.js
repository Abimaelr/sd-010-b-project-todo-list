function clearList() {
  document.getElementById("lista-tarefas").innerHTML = "";
}

function insertText() {
  arrayListItens.push(document.querySelector('#texto-tarefa').value);
}

function createElementList() {
  for (let indexCreate = 0; indexCreate < arrayListItens.length; indexCreate += 1) {
    const textItem = arrayListItens[indexCreate];
    const newLI = document.createElement('li');
    newLI.classList.add('li-tarefas');
    newLI.innerText = textItem;
    ordenedList.appendChild(newLI);
  };
}

function switchBG() {
  const bgItens = document.querySelectorAll('.li-tarefas');

  for (let indexBGItens = 0; indexBGItens < bgItens.length; indexBGItens += 1) {
    bgItens[indexBGItens].addEventListener('click', function () {
      bgItens[indexBGItens].style.background = 'rgb(128, 128, 128)';
    });
  };
}

const btn = document.getElementById('criar-tarefa');
const arrayListItens = [];
const ordenedList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function () {
  clearList();
  insertText();
  createElementList();

  document.querySelector('#texto-tarefa').value = "";

  switchBG();
});
