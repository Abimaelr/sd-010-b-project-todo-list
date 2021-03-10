
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


/* function colorList (){
    let addlist = document.querySelector('#lista-tarefas');
    addlist.addEventListener("click", function(event){
        event.target.classList.add(".cinza");
    })

}
colorList();   */

//Função remover background
/* function removeBrackground(){
    let addlist = document.getElementById('lista-tarefas');
    addlist.addEventListener("click", function(event){
        if(addlist.hasAttribute('rgb(128, 128, 128)')){
            addlist.removeAttribute('rgb(128, 128, 128)');
        } else {
            
        }
    })
    
}

removeBrackground();  */