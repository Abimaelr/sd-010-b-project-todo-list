const dadElement = document.body;

// Criando a tag HEADER com o conteudo de H1 com o titulo
const header = document.createElement('header');
dadElement.append(header);
const title = document.createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';
header.append(title);

// Criando uma paragrafo com descrição e id 'funcionamento'
const textSection = document.createElement('p');
textSection.id = 'funcionamento';
textSection.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
dadElement.append(textSection);

// Criando um input
const inputText = document.createElement('input');
inputText.id = 'texto-tarefa';
dadElement.appendChild(inputText);

// Criando lista ordenada
const listOrder = document.createElement('ol');
listOrder.id = 'lista-tarefas';
dadElement.appendChild(listOrder);

//
function liCatcher(element, event) {
  const eventClick = event;
  const selected = document.querySelector(`.${eventClick}`);
  if (selected !== null) {
    selected.classList.remove(eventClick);
  }
  element.target.classList.add(event);
}

//
function assignment() {
  const listItem = document.createElement('li');
  listItem.innerText = inputText.value;
  listOrder.appendChild(listItem);
  listItem.className = 'item';
  inputText.value = '';
  listItem.addEventListener('click', (element) => {
    liCatcher(element, 'selected');
  });
  listItem.addEventListener('dblclick', (element) => {
    element.target.classList.toggle('completed');
  });
}

const bt1 = document.createElement('button');
bt1.id = 'criar-tarefa';
bt1.innerText = 'add';
bt1.addEventListener('click', assignment);
dadElement.insertBefore(bt1, listOrder);
