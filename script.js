const header = document.querySelector('#titulo');
const title = document.createElement('h1');
title.textContent = 'Minha Lista de Tarefas';
header.appendChild(title);
const p = document.querySelector('#funcionamento');
p.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
const catchButton = document.querySelector('#criar-tarefa');
const catchText = document.querySelector('#texto-tarefa');
const catchList = document.querySelector('#lista-tarefas');
const btnClear = document.querySelector('#apaga-tudo');
catchText.focus();

function click() {
  if (catchText.value !== '') {
    const list = document.createElement('li');
    list.className = 'listas';
    list.textContent = catchText.value;
    catchList.appendChild(list);
    catchText.value = '';
    catchText.focus();
  } else {
    alert('Digite um item');
    catchText.focus();
  }
}

function keyEnter(event) {
  const key = event.keyCode;
  if (key === 13) {
    click();
  }
}

catchText.addEventListener('keydown', keyEnter);
catchButton.addEventListener('click', click);

const selectList = catchList.children;

function selectedList(e) {
  for (let index = 0; index < selectList.length; index += 1) {
    if (selectList[index].classList.contains('selected')) {
      selectList[index].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
}

catchList.addEventListener('click', selectedList);

function markList(e) {
  e.target.classList.toggle('completed');
}

catchList.addEventListener('dblclick', markList);

function clearList() {
  catchList.innerHTML = '';
}

btnClear.addEventListener('click', clearList);
