let btn = document.getElementById('criar-tarefa');
let arrayListItens = [];
const ordenedList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function () {
  clearList();
  arrayListItens.push(document.querySelector('#texto-tarefa').value);
  createElementList();
  document.querySelector('#texto-tarefa').value = "";
});

function clearList() {
  document.getElementById("lista-tarefas").innerHTML = "";
}



function createElementList() {
  for (let indexCreate = 0; indexCreate < arrayListItens.length; indexCreate += 1) {
    let textItem = arrayListItens[indexCreate];

    let newLI = document.createElement('li');
    newLI.innerText = textItem;

    ordenedList.appendChild(newLI);

  }
}
