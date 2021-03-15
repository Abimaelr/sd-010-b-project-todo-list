let cab = document.getElementById('cabecalho');
let header = document.createElement('header');
header.innerHTML = 'Minha Lista de Tarefas';
header.setAttribute('id', 'header');
cab.appendChild(header);

let par = document.createElement('p');
par.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';;
par.id = 'funcionamento';
header.appendChild(par);

let ent = document.getElementById('entrada');
let input = document.createElement('input');
input.id = 'texto-tarefa';
ent.appendChild(input);
