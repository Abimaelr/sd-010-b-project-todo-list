const body = document.body;
const header = document.createElement('header');
header.textContent = 'Minha Lista de Tarefas'
body.appendChild(header)

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento'
paragraph.textContent = 'Clique duas vezes em um item para marcá-lo como completo.'
body.appendChild(paragraph)

const input = document.createElement('input');
input.id = 'texto-tarefa'
body.appendChild(input)

const listaTarefas = document.createElement('ol');
listaTarefas.id = 'lista-tarefas'
body.appendChild(listaTarefas)