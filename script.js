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

let list = document.getElementById('list');
let item = document.createElement('ol');
item.id = 'lista-tarefas';
list.appendChild(item);

let btn = document.createElement('button');
btn.id = 'criar-tarefa';
ent.appendChild(btn); 

function tarBtn(){
    let btn = document.getElementById('criar-tarefa');
    btn.addEventListener('click' , tarefas )
}

function tarefas(){
    let tasks = document.getElementById('texto-tarefa').value;
    if (tasks !== '') {
    let addIt = document.createElement('li');
    item.appendChild(addIt).innerText = tasks;
    clear();    
}
}

list.addEventListener('click', clickedList);

function clickedList(){
    let liItem = document.getElementsByTagName('li')
    for(let i = 0; i < liItem.length; i += 1){
        liItem[i].style.backgroundColor = 'rgb(128, 128, 128)';
    }
}  

function clear() {
    document.getElementById('texto-tarefa').value = '';
}




tarefas();
tarBtn();
clickedList();
