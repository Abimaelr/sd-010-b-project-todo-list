const bodyChilds = document.body;
// requisito 1
bodyChilds.appendChild(document.createElement('header'));
document.querySelector('header').innerText = 'Minha Lista de Tarefas';

// requisito 2
const headerP = document.createElement('p');
bodyChilds.appendChild(headerP);
headerP.id = 'funcionamento';
headerP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// requisito 3
const input = document.createElement('input');
bodyChilds.appendChild(input);
input.id = 'texto-tarefa';
