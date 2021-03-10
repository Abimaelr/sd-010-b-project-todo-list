
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

 

function changeColor(){
    let addList = document.querySelector('#lista-tarefas');
    addList.addEventListener("click", function(event){
        let elementCinza = document.querySelector(".cinza");
        if(elementCinza){
            elementCinza.classList.remove('cinza');
        }
            event.target.classList.add('cinza');
    })
}
changeColor();


/* Pontos importantes sobre este requisito:

* Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

* Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas. */

function riscaList(){
    let addList = document.querySelector('#lista-tarefas');
    addList.addEventListener("dblclick", function(event){
        let elementRiscado = document.querySelector(".completed"); 
        if(elementRiscado){
            elementRiscado.classList.remove('completed');
        } else{
            event.target.classList.add('completed'); 
        }
    })
}
riscaList(); 