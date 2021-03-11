const header = document.querySelector('#titulo');
const title = document.createElement('h1');
title.textContent = 'Minha Lista de Tarefas';
header.appendChild(title);
const p = document.querySelector('#funcionamento');
p.textContent = 'Clique duas vezes em um item para marcá-lo como completo';

const catchButton = document.querySelector('#criar-tarefa');
const catchText = document.querySelector('#texto-tarefa');
catchText.focus(); 

function insertList() {
  catchButton.addEventListener('click', function () {
    if (catchText.value !== '') {
      const catchList = document.querySelector('#lista-tarefas');
      const list = document.createElement('li');
      list.textContent = catchText.value;
      catchList.appendChild(list);
      catchText.value = '';
      catchText.focus(); 
    } else {
      alert('Digite um item');
      catchText.focus(); 
    }
  });
}

insertList();
