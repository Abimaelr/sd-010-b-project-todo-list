
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

function colorList (){
    let addlist = document.getElementById('lista-tarefas');
    addlist.addEventListener("click", function(event){
        event.target.style.background = 'rgb(128, 128, 128)';
    })
}

colorList(); 

