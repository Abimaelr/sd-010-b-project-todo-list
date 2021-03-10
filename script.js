// criando uma terfa

createTaskButton = document.querySelector("#criar-tarefa");
inputTask = document.querySelector("#texto-tarefa");
listTask = document.querySelector("#lista-tarefas");
 
window.onload = function() {
    let listArrayStorage = JSON.parse(localStorage.getItem("listArrayStorage"));
    if(listArrayStorage !== null){
        
        for(let index = 0; index < listArrayStorage.length; index++){
            let li = document.createElement('li');
            li.innerHTML = listArrayStorage[index];
            listTask.appendChild(li);
        }
        changeBackgroundColor();
        riscaTask();
        buttonApaga();
        buttonFinalizados();  
        buttonSalvar();
    }
} 
/* 
function buttonSelecionadosRemover(){
    
    let buttonSelecionado = document.querySelector("#remover-selecionado");

    buttonSelecionado.addEventListener('click', function(){
        let task = document.querySelector('.selected');
        console.log(task);
        task.remove();
    })     
} */

function apagar(task){
    console.log(task);
    task.remove();
}

function changeBackgroundColor(){

    let listArray = document.querySelector("ol").childNodes;

    for(let index = 0; index < listArray.length; index++){
        // console.log(document.querySelectorAll(".list-task")[index])
        listArray[index].addEventListener('click', function(event){
            if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
                event.target.style.backgroundColor = 'rgb(128, 128, 128)';
               /*  let buttonSelecionado = document.querySelector("#remover-selecionado");
                buttonSelecionado.addEventListener('click',apagar(listArray[index])) */
            }
            else{ 
            }
            for(let index1 = 0; index1 < listArray.length; index1++){
                console.log("aqui")
                if(listArray[index1] !== event.target){
                    listArray[index1].style.backgroundColor = 'white';
                }
            }
        })
    }    
}

function buttonFinalizados(){
    
    let buttonApaga = document.querySelector("#remover-finalizados");
    let listArray = document.querySelectorAll(".completed");
    // console.log(listArray);

    buttonApaga.addEventListener('click', function(event){
        for(let index = 0; index < listArray.length; index++){
            listArray[index].remove();
                
        }
     })     
}

function riscaTask(){
    
    let listArray = document.querySelector("ol").childNodes;

    for(let index = 0; index < listArray.length; index++){
        listArray[index].addEventListener('dblclick', function(event){
            // console.log(event.target);
            // console.log(event.target.className);
            if(event.target.classList.contains('completed')){
                event.target.classList.remove('completed');
            }
            else{ 
                event.target.classList.add('completed');
                buttonFinalizados(); 
            }
        })
    }  
}

function buttonApaga(){
    
    let buttonrApaga = document.querySelector("#apaga-tudo");
    let listArray = document.querySelector("ol").childNodes;

    buttonrApaga.addEventListener('click', function(event){
        for(let index = 0; index < listArray.length; index++){
            listArray[index].remove();
                
        }
     })     
}

function buttonSalvar(){
    
    let buttonrSalvar = document.querySelector("#salvar-tarefa");
    let listArray = document.querySelector("ol").childNodes;

    
    buttonrSalvar.addEventListener('click', function(event){
        let array = []
        for(let index = 0; index < listArray.length; index++){
            array.push(listArray[index].innerHTML)
        }
        localStorage.setItem('listArrayStorage', JSON.stringify(array));
    })     
}


createTaskButton.addEventListener("click", function(){
    if(inputTask.value == ''){
        alert("Invalid Task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        listTask.appendChild(li);
        inputTask.value = '';
        changeBackgroundColor();
        riscaTask();
        buttonApaga();
        buttonFinalizados();  
        buttonSalvar();
        buttonSelecionadosRemover();
    }
    
})



