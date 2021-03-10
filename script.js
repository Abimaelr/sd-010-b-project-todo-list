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
function assignment() {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  listItem.innerText = inputText.value;
  listOrder.appendChild(listItem);
  inputText.value = '';
}

const bt1 = document.createElement('button');
bt1.id = 'criar-tarefa';
bt1.addEventListener('click', assignment);
dadElement.insertBefore(bt1, listOrder);

//
function liCatcher() {
  const tag = document.querySelector('ol');
  tag.addEventListener('click', function evento(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

liCatcher();
