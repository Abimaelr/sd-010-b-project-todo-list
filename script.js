const body = document.body;
const header = document.createElement('header');
header.textContent = 'Minha Lista de Tarefas';
body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.textContent = 'Clique duas vezes em um item para marcá-lo como completo.';
body.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
body.appendChild(input);

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.textContent = 'criar tarefa'
body.appendChild(button);

const listaTarefas = document.createElement('ol');
listaTarefas.id = 'lista-tarefas';
body.appendChild(listaTarefas);
 
const textoInput = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

btn.addEventListener('click', adcTarefa);
function adcTarefa() {
    const li = document.createElement('li');
    li.innerText = textoInput.value;
    list.appendChild(li);
    textoInput.value ='';
}