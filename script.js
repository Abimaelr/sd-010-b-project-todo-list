
function criarTarefa(){
    let addtext = document.getElementById('texto-tarefa').value; 
    let list = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    list.appendChild(li).innerHTML = addtext; 
    limpaInput();
}

function botaoAdd(){
    let button = document.getElementById('criar-tarefa'); 
    button.addEventListener("click", criarTarefa);
}

botaoAdd(); 

function limpaInput(){
    document.getElementById('texto-tarefa').value = '';
   
}

